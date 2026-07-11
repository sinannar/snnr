# 0002 - Dependency compatibility and regression tests (v1.1.2)

- Status: Accepted
- Date: 2026-07-11
- Version snapshot: v1.1.2

## Context

The previous dependency ranges allowed installations to resolve a `got` version
requiring Node.js 22 while the package advertised Node.js 20 support. The
publish workflow also used `npm install` without a lockfile, so a later
dependency release could change the published application without a code
change.

## Decision

1. Pin the runtime dependency versions that support Node.js 20 and commit the
   generated lockfile.
2. Use `npm ci` and run the test suite before publishing.
3. Keep avatar loading and browser launching non-fatal so a terminal card still
   works when optional integrations fail.
4. Cover argument parsing, normal interaction, avatar failure handling, and a
   real CLI invocation with Node's built-in test runner.

## Consequences

- Dependency changes are deliberate and reviewable.
- The package continues to support Node.js 20.
- CI catches dependency and interactive startup regressions before publishing.
- `--no-image` and `--no-open` make smoke testing possible in headless
  environments.
