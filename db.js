//create DB


var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// var url = "mongodb://localhost:27017/";
//var url="mongodb://factdbuser:dbuser123456@ds161146.mlab.com:61146/heroku_0wbzqv0h"
var url="mongodb://factdbuser:dbuser123456@ds161146.mlab.com:61146/heroku_0wbzqv0h"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    addCollections(db);
});


function addCollections(db){
	// var dbase = db.db("kulukdb"); //here
	var dbase= db.db("heroku_0wbzqv0h");
	dbase.createCollection("products");
	dbase.createCollection("places");
	dbase.createCollection("sliders");
	dbase.createCollection("users",function(err, res) {
	    if (err) throw err;
		console.log("Collection users created!");
		res.createIndex( { "usuario": 1 }, { unique: true } )
		// res.insertMany([{username:'admin',name:'admin',password:'admin'},{username:'user',name:'user',password:'user'}]);
		db.close();
	});
}
