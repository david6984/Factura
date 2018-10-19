var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// var url = "mongodb://localhost:27017/";
var url="mongodb://factdbuser:dbuser123456@ds161146.mlab.com:61146/heroku_0wbzqv0h"
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function getPlace(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var Place = await(dbase.collection("places").findOne({_id: new ObjectId(id)}));
    db.close();
    return Place;
}

function getPlaces() {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var Places = await(dbase.collection("places").find({}).toArray());
    db.close();
    return Places;
}

function deletePlace(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    try{
        var Place = await(dbase.collection("places").deleteOne({_id: new ObjectId(id)}));
    }catch(e){
        console.log(e);
    }
    db.close();
    return Place;
}

function updatePlace(Place) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var id = Place._id;
    delete Place._id; // no se puede enviar el ID de nuevo porque da un error de que _id es inmutable
    var Place = await(dbase.collection("places").replaceOne({_id: new ObjectId(id)}, Place, {upsert: true}));
    db.close();
    return Place;
}

function addPlace(Place) {
    console.log('addPlace');
    console.log(Place);
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var Place = await(dbase.collection("places").insertOne(Place));
    db.close();
    return Place;
}

module.exports = {
    getPlace: async(getPlace),
    getPlaces: async(getPlaces),
    deletePlace: async(deletePlace),
    updatePlace: async(updatePlace),
    addPlace: async(addPlace)
};