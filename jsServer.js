var express = require('express'),
    http = require('http');

var customers = require('./data/customers.json');
var airports = require('./data/airports.json');
var flights = require('./data/flights.json');
var html001 = require('./data/html001.json');
var reservations = [];
var cors = require('express-cors');

for (var i = 0; i < flights.length; i++) {
  flights[i].originFullName = airports[flights[i].origin].name;
  flights[i].destinationFullName = airports[flights[i].destination].name;
}

function getMatchingFlights (data) {
  return flights.filter(function  (item) {
    return (item.origin === data.origin) &&
        (item.destination === data.destination);
  });
}

var app = express()
    .use(cors({allowedOrigins: [ '*']}))
    .use(express.bodyParser())
    .use(express.static('public'));

app.get('/jHtml', function  (req, res) {
  res.jsonp(html001);
});

app.get('/customers', function (req, res) {
  res.json(customers);
});

app.get('/customer/:id', function  (req, res) {
  if (typeof customer[req.params.customer] === 'undefined') {
    res.json(404, {status: 'not found - invalid customer code'});
  } else {
    res.json(customerInfo[req.params.customerId]);
  }
});
app.get('/airports', function  (req, res) {
  res.json(airports);
});

app.get('/airports/:airport', function (req, res) {
  if (typeof airports[req.params.airport] === 'undefined') {
    res.json(404, {status: 'not found - invalid airport code'});
  } else {
    res.json(airports[req.params.airport]);
  }
});

app.get('/flights', function (req, res) {
  res.json(flights);
});

app.get('/flights/:origin', function (req, res) {
  var with_origin = flights.filter(function  (item) {
    return item.origin === req.params.origin;
  });

  res.json(with_origin);
});

app.get('/flights/:origin/:destination', function (req, res) {
  var matches = getMatchingFlights(req.params);

  res.json(matches);
});

app.get('/reservations', function  (req, res) {
  res.json(reservations);
});

app.post('/reservations', function  (req, res) {
  var matches = getMatchingFlights(req.body);

  if (matches.length) {
    reservations.push(matches[0]);
    res.json(matches[0]);
  } else {
    res.status(404).end();
  }
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});