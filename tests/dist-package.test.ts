import { execSync } from 'child_process';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';

describe('dist/package.json postbuild', () => {
  it('generates a minimal package.json with correct fields', async () => {
    // Run the build so the postbuild script generates dist/package.json
    execSync('npm run build --silent', { stdio: 'inherit' });

    const pkgPath = resolve(process.cwd(), 'dist', 'package.json');
    const raw = await readFile(pkgPath, 'utf8');
    const pkg = JSON.parse(raw);

    expect(pkg).toHaveProperty('main', './index.cjs');
    expect(pkg).toHaveProperty('module', './index.js');
    expect(pkg).toHaveProperty('types', './index.d.ts');
    expect(pkg).toHaveProperty('exports');
    expect(pkg.exports['.']).toEqual({ import: './index.js', require: './index.cjs' });
  });
});
