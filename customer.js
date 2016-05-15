/**
 * Created by jose.sosa on 5/13/2016.
 */
var customers = require('./data/customers.json');

var str = '{ "name": "John Doe", "age": 42 }';
//var obj = JSON.parse(customers);

//Asynchronous version
// require('fs').readFile('./data/customers.json', 'utf8', function (err, data) {
//     if (err) throw err; // we'll not consider error handling for now
//    var obj = JSON.parse(data);
// });

//Synchronous version
var json = JSON.parse(require('fs').readFileSync('./data/customers.json', 'utf8'));

exports.getCustomers = function() {
    return json;
};
