import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isPromptExitKey, parseArgs, run } from '../snnr.js';

function fakeDependencies({ promptUrl = 'https://github.com/sinannar', open = async () => {} } = {}) {
  let imageOptions;
  return {
    got: async () => ({ body: Buffer.from('avatar') }),
    terminalImage: {
      buffer: async (_image, options) => {
        imageOptions = options;
        return 'avatar output';
      }
    },
    inquirer: {
      Separator: class Separator {
        constructor(message) {
          this.message = message;
        }
      },
      prompt: async () => ({ url: promptUrl })
    },
    open,
    get imageOptions() {
      return imageOptions;
    }
  };
}

test('parses diagnostic CLI flags', () => {
  assert.deepEqual(parseArgs(['--no-image', '--no-open']), {
    skipImage: true,
    skipOpen: true,
    skipPrompt: false
  });

  test('recognizes escape and q as prompt exit keys', () => {
    assert.equal(isPromptExitKey({ name: 'escape' }), true);
    assert.equal(isPromptExitKey({ name: 'q' }), true);
    assert.equal(isPromptExitKey({ name: 'enter' }), false);
  });
});

test('renders the card, prompts, and opens the selected destination', async () => {
  const logs = [];
  let openedUrl;
  const output = {
    clear: () => {},
    log: (message) => logs.push(message),
    warn: () => {}
  };

  const selectedUrl = await run({
    dependencies: fakeDependencies({
      open: async (url) => {
        openedUrl = url;
      }
    }),
    output
  });

  assert.equal(selectedUrl, 'https://github.com/sinannar');
  assert.equal(openedUrl, selectedUrl);
  assert.ok(logs.includes('avatar output'));
  assert.ok(logs.some((message) => message.includes('Sinan Nar')));
});

test('uses cursor-safe avatar rendering', async () => {
  const dependencies = fakeDependencies();
  await run({
    dependencies,
    output: { clear: () => {}, log: () => {}, warn: () => {} },
    skipOpen: true
  });

  assert.deepEqual(dependencies.imageOptions, {
    width: '33%',
    preferNativeRender: false
  });
});

test('continues when avatar loading fails', async () => {
  const warnings = [];
  const output = {
    clear: () => {},
    log: () => {},
    warn: (message) => warnings.push(message)
  };
  const dependencies = fakeDependencies();
  dependencies.got = async () => {
    throw new Error('network unavailable');
  };

  await run({ dependencies, output, skipOpen: true });

  assert.deepEqual(warnings, ['Avatar unavailable; continuing without it.']);
});
