import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

// Resolve the submitted assets relative to this file, not the caller's cwd.
const sourceRoot = dirname(fileURLToPath(import.meta.url));
const destination = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// Prepare the destination and copy both pieces of the entry.
mkdirSync(destination, { recursive: true });
cpSync(join(sourceRoot, 'game'), join(destination, 'game'), { recursive: true });
cpSync(join(sourceRoot, 'screenshots'), join(destination, 'screenshots'), { recursive: true });

// Generate the canonical dossier using the evaluator's limits.
const dossier = buildDossier(destination, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  game_max_files: 993,
  game_max_bytes: 50331648,
  game_path_max_bytes: 1000,
});
writeFileSync(join(destination, 'dossier.json'), dossier);
