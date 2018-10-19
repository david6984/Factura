var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// var url = "mongodb://localhost:27017/";
var url="mongodb://factdbuser:dbuser123456@ds161146.mlab.com:61146/heroku_0wbzqv0h"
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function getSliders() {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var slides= await(dbase.collection("sliders").find({}).toArray());
    db.close();
    return slides;
}

function getSlider(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var slide = await(dbase.collection("sliders").findOne({_id: new ObjectId(id)}));
    db.close();
    return slide;
}


function deleteSlider(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    try{
        var slide = await(dbase.collection("sliders").deleteOne({_id: new ObjectId(id)}));    
    }catch(e){
        console.log(e);
    }
    
    db.close();
    return slide;
}

function updateSlider(slide) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var id = slide._id;
    delete slide._id; // no se puede enviar el ID de nuevo porque da un error de que _id es inmutable
    var slide = await(dbase.collection("sliders").replaceOne({_id: new ObjectId(id)}, slide, {upsert: true}));
    
    db.close();
    return slide;
}

function addSlider(slide) {
    console.log('add slide',slide)
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var slide = await(dbase.collection("sliders").insertOne(slide));
    db.close();
    return slide;
}

module.exports = {
    getSliders: async(getSliders),
    getSlider: async(getSlider),
    deleteSlider: async(deleteSlider),
    updateSlider: async(updateSlider),
    addSlider: async(addSlider)
};