'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getCurrency(request, response) {
    console.log('GET currency',request.params.id);
    var result;
    try {
        result = await (service.currencyService.getCurrency(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteCurrency(request, response) {
    console.log('routes/api DELETE currency',request,'-',response);
    try {
        var result;
        result = await (service.currencyService.deleteCurrency(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateCurrency(request, response) {
    console.log('UPDATE currency');
    var result;
    try {
        result = await (service.currencyService.updateCurrency(request.body.currency));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postCurrency(request, response) {
    console.log('POST currency');
    var result;
    try {
        result = await (service.currencyService.postCurrency(request.body.currency));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getCurrency));
routes.get('/', async(getCurrency));
routes.delete('/:id', async(deleteCurrency));
routes.put('/:id', async(updateCurrency));
routes.post('/', async(postCurrency));

module.exports = routes;