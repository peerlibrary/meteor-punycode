Package.describe({
  name: 'peerlibrary:punycode',
  summary: "A robust Punycode converter that fully complies to RFC 3492 and RFC 5891",
  version: '1.3.2_1',
  git: 'https://github.com/peerlibrary/meteor-punycode.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.3.1');

  api.export('Punycode');

  api.add_files([
    'before.js',
    'vendor/punycode.js',
    'after.js'
  ]);
});

Package.on_test(function (api) {
  // Core dependencies.
  api.use([
    'tinytest',
    'test-helpers'
  ]);

  // Internal dependencies.
  api.use([
    'peerlibrary:punycode'
  ]);

  api.addFiles([
    'tests.js'
  ]);
});
