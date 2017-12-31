const pify = require('pify');
const fs = require('fs');
const path = require('path');

const targets = ['dist-firefox', 'dist-chrome'];

let packageMeta;
let manifest;
Promise.resolve().then(() => {
  return pify(fs.readFile)('package.json', 'utf-8');
}).then(data => {
  packageMeta = JSON.parse(data);
}).then(() => {
  return pify(fs.readFile)(path.join('webextension', 'manifest.json'), 'utf-8');
}).then(data => {
  manifest = JSON.parse(data);
}).then(() => {
  return Promise.all(targets.map(target => {
    manifest.version = packageMeta.version;
    return pify(fs.writeFile)(path.join(target, 'manifest.json') ,JSON.stringify(manifest, null, 2));
  }));
}).catch(error => {
  console.error(error);// eslint-disable-line no-console
  process.exit(1);
});
