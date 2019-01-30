var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// var url = "mongodb://localhost:27017/";
var url="mongodb://factdbuser:dbuser123456@ds161146.mlab.com:61146/heroku_0wbzqv0h"
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function getCurrencies() {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var Currencies = await(dbase.collection("currency").find({}).toArray());
    db.close();
    return Currencies;
}

function getCurrency(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var Currency = await(dbase.collection("currency").findOne({_id: new ObjectId(id)}));
    db.close();
    return Currency;
}

function deleteCurrency(id) {
    console.log('db prod delete');
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    try{
        console.log('entro al try del delete');
        var Currency = await(dbase.collection("currency").deleteOne({_id: new ObjectId(id)}));    
        //var Product = await(dbase.collection("currency").drop());    
    }catch(e){
        console.log(e);
    }
    
    db.close();
    return Currency;
}

function updateCurrency(Currency) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var id = Currency._id;
    try{
        delete Currency._id; // no se puede enviar el ID de nuevo porque da un error de que _id es inmutable
        var Currency = await(dbase.collection("currency").replaceOne({_id: new ObjectId(id)}, Currency, {upsert: true}));
        console.log('try bd');
    }catch(e){
        console.log(e);
    }
    //var Product = await(dbase.collection("currency").replaceOne({"_id": ObjectId(id)}, Product, {upsert: true}));
    db.close();
    return Currency;
}

function addCurrency(Currency) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var Currency = await(dbase.collection("currency").insertOne(Currency));
    db.close();
    return Currency;
}

module.exports = {
    getCurrencies: async(getCurrencies),
    getCurrency : async(getCurrency),
    deleteCurrency: async(deleteCurrency),
    updateCurrency: async(updateCurrency),
    addCurrency: async(addCurrency)
};