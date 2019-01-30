'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var CurrencyRsrc = require(__base + 'server/infrastructure/resources').currency;

function getCurrency(id) {
    var result;
    console.log('get currency by ' + id);
    try {
    	if(id){
        	result = await (CurrencyRsrc.getCurrency(id));
        } else {
        	result = await (CurrencyRsrc.getCurrencies());
        }   
    } catch(error) {
        throw error;
    }
    return { currency: result };
}

function updateCurrency(currency) {
    var result;
    console.log('update currency by ' + product._id);
    try {
        result = await (CurrencyRsrc.updateCurrency(currency));
    } catch(error) {
        throw error;
    }
    return { currency: result };
}

function deleteCurrency(id) {
    try {
        console.log('delete currency service try by ',id);
        var result;
        result = await (CurrencyRsrc.deleteCurrency(id));
    } catch(error) {
        throw error;
    }
    return { currency: result };
}

function postCurrency(currency) {
    var result;
    console.log('post currency');
    try {
        result = await (CurrencyRsrc.addCurrency(currency));
    } catch(error) {
        throw error;
    }
    return { currency: result };
}

module.exports.getCurrency = async(getCurrency);
module.exports.updateCurrency = async(updateCurrency);
module.exports.deleteCurrency = async(deleteCurrency);
module.exports.postCurrency = async(postCurrency);