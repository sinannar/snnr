# 0001 - Current architecture baseline (v1.0.0)

- Status: Accepted
- Date: 2026-07-08
- Version snapshot: v1.0.0

## Context

The `snnr` package is a small Node.js CLI business card that renders profile
content in the terminal and lets users open selected links in their default
browser. The repository had no formal architecture decision records, making it
harder to track the rationale behind implementation and dependency choices.

## Decision

The v1.0.0 architecture baseline is recorded as:

1. **Runtime model**
   - Single-file CLI entrypoint (`snnr.js`) executed with Node.js.
   - ES module package configuration with top-level `await`.
2. **Interaction model**
   - Render avatar and profile summary in terminal output.
   - Provide an interactive terminal selector for destinations.
   - Open selected destination in the system default browser.
3. **Dependency strategy**
   - Use focused third-party libraries for terminal rendering, prompts,
     hyperlink formatting, HTTP fetch, and browser launch.
   - Keep the package lightweight with only runtime dependencies.
4. **Repository scope**
   - Keep implementation intentionally minimal and centered around one CLI
     command (`snnr`).

## Consequences

- Future changes can reference this baseline when proposing architectural
  updates.
- ADRs become the canonical place to record accepted architecture decisions.
- Significant design or dependency direction changes should be documented in
  subsequent ADRs.
