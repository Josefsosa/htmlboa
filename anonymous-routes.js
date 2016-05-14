var express = require('express'),
    quoter  = require('./quoter');
    customer = require('./customer');

var app = module.exports = express.Router();

app.get('/api/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.get('/api/customer', function(req, res) {
  res.status(200).send(customer.getCustomers());
});