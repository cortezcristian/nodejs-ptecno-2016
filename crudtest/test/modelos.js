var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/superdemo');
var Persona = require('../models/persons.js');



describe('Test de Personas', function(){
  it('Debe persistir una persona en BD', function(done){
    var p = new Persona({age: 44});
    p.save(done);
  });

  it('Debe arrojar una excepcion', function(){
    throw new Error('Error fatal');
  });

  it('Debe tardar unos segundos', function(done){
    setTimeout(function(){
      done();
    }, 10)
  });

  it('Debe salir ok', function(){

  });

});
