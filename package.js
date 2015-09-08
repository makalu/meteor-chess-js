Package.describe({
  name: 'makalu:chess-js',
  version: '0.0.1',
  summary: "Chess.js 0.9.1 by Jeff Hlywa, repackaged for Meteor.",
  git: 'https://github.com/makalu/meteor-chess-js.git',
  documentation: 'README.md'
});

Npm.depends({
  'chess.js': '0.9.1'
});

Package.onUse(function(api) {
  api.use(['cosmos:browserify@0.5.0']);

  api.add_files([
    'chess-js.browserify.options.json',
    'chess-js.browserify.js'
  ]);

  api.export('Chess');
});
