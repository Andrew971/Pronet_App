const express = require('express');
const Client = express.Router();
var path = require('path');


Client.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

module.exports = Client;
