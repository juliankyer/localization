const express = require('express');
const app = express();
const i18n = require('./i18n');
app.use(i18n);

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.locals.title = 'localization';

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});