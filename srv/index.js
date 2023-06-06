const express = require('express');
const app = express();

const xsenv = require('@sap/xsenv');
const services = xsenv.getServices({ hana:'myhana' });

app.get('/', function (req, res) {
  res.send('Using HANA ' + services.hana.host + ':' + services.hana.port);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});