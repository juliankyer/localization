const i18n = require('i18n');

i18n.configure({
  locales:['en-US', 'es'],
  directory: __dirname + '/locales',
  defaultLocale: 'en-US',
  api: {
    '__': 'translate'
  },
  queryParameter: 'lang'
});

module.exports = function(req, res, next) {
  i18n.init(req, res);
  return next();
}