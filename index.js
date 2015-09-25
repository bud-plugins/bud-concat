var concat = require("concat");

plugin.build = true;
plugin.title = 'Concat';
plugin.params = [
  { key: 'dest', name: 'Destination file' }
];

module.exports = plugin;

function plugin (options) {
  return function (b) {
    concat(b.files, options.dest, b.done);
  }
}
