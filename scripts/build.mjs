import { mkdir, rm, copyFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');
await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, 'assets'), { recursive: true });
for (const name of ['index.html', 'styles.css', 'script.js', 'robots.txt']) {
  await copyFile(join(root, name), join(dist, name));
}
for (const entry of await readdir(join(root, 'assets'), { withFileTypes: true })) {
  if (entry.isFile() && /\.(jpeg|png|otf|txt)$/.test(entry.name)) {
    await copyFile(join(root, 'assets', entry.name), join(dist, 'assets', entry.name));
  }
}
console.log('Static preview copied to dist; no secrets, source notes, or deployment configuration included.');
