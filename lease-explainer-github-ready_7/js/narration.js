/* ===========================================================================
   narration.js — what the Listen button reads, and which recording matches it.

   Shared by the browser (js/app.js) and the clip generator
   (tools/generate-narration.mjs) so both always build the same script.

   The Listen button reads ONLY these right-panel sections, in this order,
   skipping any a term does not have:
       Lease Language → What This Means → Why It Matters → Important to Know
   Key Term, Example, SOE links, review flags and provenance are never read.
   Every term with any of those sections gets a Listen button.
   =========================================================================== */

export const VOICE = {
  name: 'Jessica',
  id: 'cgSgspJ2msm6clMCkdW9',          // ElevenLabs premade "Jessica"
  model: 'eleven_multilingual_v2',
};

export const AUDIO_DIR = 'assets/audio/';
export const MANIFEST_URL = AUDIO_DIR + 'manifest.json';

const asText = (v) => (Array.isArray(v) ? v.join(' ') : v || '');

/** the panel sections that are narrated, as [{ label, text }] */
export function narrationSections(h) {
  if (!h) return [];
  return [
    ['Lease language', h.leaseLanguage],
    ['What this means', h.meaning],
    ['Why it matters', h.whyItMatters],
    ['Important to know', asText(h.importantToKnow)],
  ]
    .filter(([, t]) => t && t.trim())
    .map(([label, text]) => ({ label, text: speakable(text) }));
}

export const hasNarration = (h) => narrationSections(h).length > 0;

/** the exact string sent to ElevenLabs (and to the browser fallback voice) */
export function narrationScript(h) {
  return narrationSections(h)
    .map(({ label, text }) => `${label}. ${/[.!?:;]$/.test(text) ? text : text + '.'}`)
    .join('\n\n');
}

/** fingerprint of script + voice + model: a recording is only played if it
 *  was made from exactly the copy that is on screen now */
export function narrationHash(h) {
  const s = `${VOICE.id}|${VOICE.model}|${narrationScript(h)}`;
  let x = 0x811c9dc5;                                   // FNV-1a, 32-bit
  for (let i = 0; i < s.length; i++) {
    x ^= s.charCodeAt(i);
    x = Math.imul(x, 0x01000193) >>> 0;
  }
  return x.toString(16).padStart(8, '0');
}

/** display text → text that reads well aloud (wording is not changed) */
function speakable(str) {
  let t = String(str)
    .replace(/\*\*([^*]+)\*\*/g, '$1')                 // **bold** markers
    .replace(/\s*…\s*/g, '. ')                          // omitted text → a pause
    .replace(/§\s*/g, 'Section ')
    .replace(/\s+/g, ' ')
    .trim();
  // runs of 4+ ALL-CAPS words (the lease's shouted notices) read better in
  // sentence case; short acronyms such as SCRA or U.S. are left alone
  t = t.replace(/\b(?:[A-Z][A-Z/’'-]*[\s,—-]+){3,}[A-Z][A-Z/’'-]*\b/g, (run) => run.toLowerCase());
  t = t.replace(/\.\s*\./g, '.');
  return t.charAt(0).toUpperCase() + t.slice(1);
}
