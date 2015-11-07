Tinytest.add('punyocode', function (test) {
  var isDefined = false;
  try {
    Punycode;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "Punycode is not defined");
  test.isTrue(Package['peerlibrary:punycode'].Punycode, "Package.peerlibrary:punycode.Punycode is not defined");
  test.equal(Punycode.encode('mañana'), 'maana-pta');
});
