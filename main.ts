// make.fun news-image entry — copy the bundled PNG into /output.
// Deterministic by construction: identical source bytes on every run, no network, no clock, no randomness.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
