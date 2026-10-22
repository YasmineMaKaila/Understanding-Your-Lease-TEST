#!/usr/bin/env node
/* ===========================================================================
   generate-narration.mjs — records the Listen narration in ElevenLabs' Jessica
   voice, one MP3 per term, into assets/audio/, and writes manifest.json.

   Run from the repository root (Node 18 or newer, no dependencies):

     node tools/generate-narration.mjs --dry-run      # list clips + character count, no API calls
     ELEVENLABS_API_KEY=sk_... node tools/generate-narration.mjs
     ELEVENLABS_API_KEY=sk_... node tools/generate-narration.mjs --only=monthly-rent   # one test clip

   Only clips whose copy changed since the last run are re-recorded (each clip
   is fingerprinted from its exact script, voice and model). --force re-records
   everything. Clips for terms that no longer qualify are deleted.

   The API key is read from the environment only. It is never written to any
   file and never reaches the browser.
   =========================================================================== */
import { mkdir, readFile, writeFile, readdir, unlink, access } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { LEASE } = await import(pathToFileURL(path.join(ROOT, 'js/lease-data.js')).href);
const { VOICE, AUDIO_DIR, narrationScript, narrationHash, hasNarration } =
  await import(pathToFileURL(path.join(ROOT, 'js/narration.js')).href);

const args = new Set(process.argv.slice(2));
const DRY = args.has('--dry-run');
const FORCE = args.has('--force');
const ONLY = (process.argv.find((a) => a.startsWith('--only=')) || '').slice(7).trim();
const OUT = path.join(ROOT, AUDIO_DIR);
const MANIFEST = path.join(OUT, 'manifest.json');
const KEY = process.env.ELEVENLABS_API_KEY;

const exists = (p) => access(p).then(() => true, () => false);

let manifest = { voice: VOICE, clips: {} };
try { manifest = JSON.parse(await readFile(MANIFEST, 'utf8')); } catch { /* first run */ }
manifest.clips ||= {};

const allTerms = LEASE.flatMap((p) => p.hotspots.map((h) => ({ page: p.page, h })))
  .filter(({ h }) => hasNarration(h));
const terms = ONLY ? allTerms.filter(({ h }) => h.id === ONLY) : allTerms;
if (ONLY && !terms.length) {
  console.error(`No term with id "${ONLY}". Term ids are listed by --dry-run.`);
  process.exit(1);
}

let chars = 0;
const todo = [];
for (const { page, h } of terms) {
  const script = narrationScript(h);
  const hash = narrationHash(h);
  const file = `${h.id}.mp3`;
  const current = manifest.clips[h.id]?.hash === hash && await exists(path.join(OUT, file));
  if (FORCE || !current) { todo.push({ page, h, script, hash, file }); chars += script.length; }
}

console.log(`${terms.length} terms have narration · ${todo.length} to record · ${chars.toLocaleString()} characters`);
if (DRY) {
  todo.forEach(({ page, h, script }) =>
    console.log(`  p${page}  ${h.id.padEnd(30)} ${String(script.length).padStart(5)} chars`));
  process.exit(0);
}
if (todo.length && !KEY) {
  console.error('Set ELEVENLABS_API_KEY in the environment to record. Nothing was changed.');
  process.exit(1);
}

await mkdir(OUT, { recursive: true });
for (const { h, script, hash, file } of todo) {
  process.stdout.write(`  recording ${h.id} … `);
  let res;
  try {
    res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE.id}?output_format=mp3_44100_128`,
      {
        method: 'POST',
        headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
        body: JSON.stringify({
          text: script,
          model_id: VOICE.model,
          voice_settings: { stability: 0.55, similarity_boost: 0.75, style: 0, use_speaker_boost: true },
        }),
      },
    );
  } catch (e) {
    console.error(`network error: ${e.message}. Check your connection; a rerun resumes where this stopped.`);
    process.exit(1);
  }
  if (!res.ok) {
    console.error(`failed (${res.status}): ${await res.text()}`);
    process.exit(1);           // manifest is saved after every clip, so a rerun resumes
  }
  await writeFile(path.join(OUT, file), Buffer.from(await res.arrayBuffer()));
  manifest.clips[h.id] = { file, hash, chars: script.length };
  manifest.voice = VOICE;
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  console.log('done');
}

/* remove clips for terms that no longer exist (skipped on a single-term test run) */
if (ONLY) {
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Test clip done: ${AUDIO_DIR}${ONLY}.mp3`);
  process.exit(0);
}
const keep = new Set(allTerms.map(({ h }) => h.id));
for (const id of Object.keys(manifest.clips)) {
  if (keep.has(id)) continue;
  await unlink(path.join(OUT, manifest.clips[id].file)).catch(() => {});
  delete manifest.clips[id];
  console.log(`  removed stale clip ${id}`);
}
for (const f of (await readdir(OUT)).filter((f) => f.endsWith('.mp3'))) {
  if (!Object.values(manifest.clips).some((c) => c.file === f)) {
    await unlink(path.join(OUT, f));
    console.log(`  removed orphan file ${f}`);
  }
}
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log('Narration is up to date.');
