var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/superdemo');
var Persona = require('./models/persons.js');

var p = new Persona({age: 44});
p.save(function(err, doc){
  console.log(err, doc, '<--');
});
