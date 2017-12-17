const rimraf = require('rimraf');
const pify = require('pify');
const copy = require('copy-concurrently');

const targets = ['dist-firefox', 'dist-chrome'];

for (const target of targets) {
  Promise.resolve().then(() => {
    return pify(rimraf)(target);
  }).then(() => {
    return copy('src', `dist-${target}`);
  });
}
