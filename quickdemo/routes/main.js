var app = module.parent.exports.app;
var Persons = require('../models/persons.js');

app.get('/list', function(req, res){
  Persons.find({}, function(err, docs){
    res.render('list', { persons: docs });
  });
});

app.get('/p/edit/:id', function(req, res){
		console.log("param url", req.params.id);

    Persons.findOne({ _id: req.params.id }, function(err, doc){
        if(!err){
            res.render('edit', { title: 'Edit', person: doc});
        } else {
            res.end(err);
        }
    });
});

app.post('/p/edit/:id', function(req, res){
	console.log("cuerpo", req.body);
  Persons.findOne({ _id: req.params.id }, function(err, doc){
		doc.name = req.body.name;
		doc.age = req.body.age;
		doc.save(function(){
			res.redirect('/list');
		});
	});
});


