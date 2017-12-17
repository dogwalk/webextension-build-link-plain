const rimraf = require('rimraf');
const pify = require('pify');
const copy = require('copy-concurrently');
const path = require('path');

const targets = ['dist-firefox', 'dist-chrome'];
const files = ['package.json', 'package-lock.json', 'license', 'changelog.md'];

Promise.all(targets.map((target) => {
  Promise.resolve().then(() => {
    return pify(rimraf)(target);
  }).then(() => {
    return copy('src', target);
  }).then(() => {
    return Promise.all(files.map((file) => {
      return copy(file, path.join(target, file));
    }));
  });
}));
