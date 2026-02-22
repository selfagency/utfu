# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

## [0.4.0] - 2026-02-21

- build: add postbuild script to write a minimal `dist/package.json` with
  `main`/`module`/`types` and `exports` fields so the published package
  points at the bundled ESM and CJS outputs.
- ci: generate `dist/package.json` via `scripts/write-dist-package.js` (ESM)
- test: add `tests/dist-package.test.ts` to verify `dist/package.json` is
  created and contains the correct fields after the build
- fix: remove unsupported `u` flags from regex literals in `src/mappings.ts`
  so TypeScript compiles with the current target.
