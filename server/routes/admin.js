const express = require('express');
const Admin = express.Router();
const path = require('path');

const subdomainMiddlware = (req, res, next) => {

  if (req.hostname.match(/sub\./g)) {
    res.sendFile(path.join(__dirname, '../../app/build', 'index.html'));
  } else {
    next();
  }
}

Admin.get('*', (req, res)=> {
  console.log(req)
  res.sendFile(path.join(__dirname, '../../app/build', 'index.html'));
});


module.exports = Admin;
