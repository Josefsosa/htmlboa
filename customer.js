/**
 * Created by jose.sosa on 5/13/2016.
 */
var customers = require('./data/customers.json');

exports.getCustomers = function(res) {
    return readable.pipe(res);
    //return res.json(customer);
}
