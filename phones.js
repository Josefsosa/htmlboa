/**
 * Created by josefsosa on 5/14/16.
 */
var phones = require('./data/phones.json');

//Synchronous call
var json = JSON.parse(require('fs').readFileSync(phones, 'utf8'));

exports.getPhones = function() {
  return json;
};
