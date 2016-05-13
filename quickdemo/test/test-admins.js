var mongoose = require('mongoose');

// Pre-cond
mongoose.connect('mongodb://localhost/crudtest');

// AUT
var Administrador = require('../models/admins.js');

var assert = require('assert');

describe('Admins', function(){

  it('debe guardar campo hasheado', function(done){
    var adm = new Administrador({password: '123456'});
    adm.save(function(err, doc){
      assert.ok(doc.password == 'e10adc3949ba59abbe56e057f20f883e', 'Deberian ser iguales');
      done();
    });
  });

  it('debe autenticarse', function(done){

    var adm = new Administrador({email: 'u@user.com', password: '123456'});
    adm.save(function(err, doc){
      assert.ok(adm.authenticate('123456') === true, 'Autenticacion correcta');
      assert.ok(adm.authenticate('12345678') === false, 'Autenticacion correcta');
      done();
    });

  });



});
