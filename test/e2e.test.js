import assert from 'node:assert/strict';
import { once } from 'node:events';
import { spawn } from 'node:child_process';
import { test } from 'node:test';

test('CLI starts and completes an interactive selection', async () => {
  const child = spawn(process.execPath, ['snnr.js', '--no-image', '--no-open', '--no-prompt'], {
    cwd: new URL('..', import.meta.url),
    stdio: ['pipe', 'pipe', 'pipe']
  });
  let stdout = '';
  let stderr = '';
  child.stdout.on('data', (chunk) => {
    stdout += chunk;
  });
  child.stderr.on('data', (chunk) => {
    stderr += chunk;
  });

  child.stdin.end();
  const [code] = await once(child, 'close');

  assert.equal(code, 0, stderr);
  assert.match(stdout, /Sinan Nar — Senior Software Engineer/);
});
