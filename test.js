'use strict';
var assert = require('power-assert');
var extensionPageForHatenaBookmark = require('./');

it('should ', function () {
  assert.strictEqual(extensionPageForHatenaBookmark('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(extensionPageForHatenaBookmark('unicorns'), 'unicorns & wrong');
});
