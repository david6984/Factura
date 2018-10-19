var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// var url = "mongodb://localhost:27017/";
var url="mongodb://factdbuser:dbuser123456@ds161146.mlab.com:61146/heroku_0wbzqv0h"
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function getProducts() {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var Products = await(dbase.collection("products").find({}).toArray());
    db.close();
    return Products;
}

function getProduct(id) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var Product = await(dbase.collection("products").findOne({_id: new ObjectId(id)}));
    db.close();
    return Product;
}

function deleteProduct(id) {
    console.log('db prod delete');
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    try{
        console.log('entro al try del delete');
        var Product = await(dbase.collection("products").deleteOne({_id: new ObjectId(id)}));    
        //var Product = await(dbase.collection("products").drop());    
    }catch(e){
        console.log(e);
    }
    
    db.close();
    return Product;
}

function updateProduct(Product) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var id = Product._id;
    try{
        delete Product._id; // no se puede enviar el ID de nuevo porque da un error de que _id es inmutable
        var Product = await(dbase.collection("products").replaceOne({_id: new ObjectId(id)}, Product, {upsert: true}));
        console.log('try bd');
    }catch(e){
        console.log(e);
    }
    //var Product = await(dbase.collection("products").replaceOne({"_id": ObjectId(id)}, Product, {upsert: true}));
    db.close();
    return Product;
}

function addProduct(Product) {
    var db = await(MongoClient.connect(url)); 
    var dbase = db.db("heroku_0wbzqv0h");
    var Product = await(dbase.collection("products").insertOne(Product));
    db.close();
    return Product;
}

module.exports = {
    getProducts: async(getProducts),
    getProduct: async(getProduct),
    deleteProduct: async(deleteProduct),
    updateProduct: async(updateProduct),
    addProduct: async(addProduct)
};