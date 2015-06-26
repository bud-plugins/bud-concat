var concat = require("concat");

plugin.build = true;
plugin.title = 'Concat';
plugin.params = [
  'Destination file'
];

module.exports = plugin;

function plugin (dest) {
  function (b) {
    concat(b.files, dest, b.done);
  }
}
