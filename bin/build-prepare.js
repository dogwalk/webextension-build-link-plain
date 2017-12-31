const rimraf = require('rimraf');
const pify = require('pify');
const copy = require('copy-concurrently');
const path = require('path');

const targets = ['dist-firefox', 'dist-chrome'];
const files = ['license', 'changelog.md', 'readme.md'];

Promise.resolve().then(() => {
  return Promise.all(targets.map((target) => {
    return Promise.resolve().then(() => {
      return pify(rimraf)(target);
    }).then(() => {
      return copy('webextension', target);
    }).then(() => {
      return Promise.all(files.map((file) => {
        return copy(file, path.join(target, file));
      }));
    });
  }));
}).catch(error => {
  console.error(error);// eslint-disable-line no-console
  process.exit(1);
});
