/*  leases.js — the lease registry.
 *
 *  Each entry bundles one lease's content modules with the metadata the picker needs.
 *  Adding a third lease means adding a data module and one entry here; app.js does not change.
 */

import * as ga from './lease-data.js';
import * as tx from './lease-data-tx.js';

function entry(id, meta, mod) {
  return {
    id,
    ...meta,
    fiction:  mod.FICTION,
    keyTerms: mod.KEY_TERMS,
    summary:  mod.SUMMARY,
    pages:    mod.LEASE,
    pageCount: mod.LEASE.length,
    termCount: mod.LEASE.reduce((n, p) => n + p.hotspots.length, 0),
  };
}

export const LEASES = {
  ga: entry('ga', {
    label: 'Georgia',
    state: 'GA',
    form: 'Georgia / National Apartment Association official form, July 2025',
    formShort: 'NAA form',
    blurb: 'Nine pages. Lease details, rent and fees run through the body paragraphs.',
  }, ga),

  tx: entry('tx', {
    label: 'Texas',
    state: 'TX',
    form: 'TAA Official Statewide Form 25-A/B-1/B-2, revised October 2025',
    formShort: 'TAA form',
    blurb: 'Six pages. A Lease Details grid on page 1 sets the figures the rest of the document refers back to.',
  }, tx),
};

export const LEASE_ORDER = ['ga', 'tx'];
export const DEFAULT_LEASE = 'ga';

/** Read a lease id from ?lease= or the hash, falling back to the default. */
export function initialLeaseId() {
  try {
    const u = new URL(window.location.href);
    const q = (u.searchParams.get('lease') || u.hash.replace('#', '')).toLowerCase();
    if (Object.prototype.hasOwnProperty.call(LEASES, q)) return q;
  } catch (_) { /* file:// or an odd URL — fall through */ }
  return DEFAULT_LEASE;
}
