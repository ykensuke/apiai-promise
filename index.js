'use strict';

var apiai = require('apiai');
var Promise = require('any-promise');

var methods = [
	'contextsRequest',
	'textRequest',
	'eventRequest',
	'voiceRequest',
	'userEntitiesRequest',
	'ttsRequest'
];

function promisify(instance, methodName){
	var method = instance[methodName];
	instance[methodName] = function(){
		var args = arguments;
		return new Promise(function(resolve, reject){
			var request = method.apply(instance, args);
			request.on('response', resolve);
			request.on('error', reject);
			request.end();
		});
	}
}

exports = module.exports = function(){
	var instance = apiai.apply(this, arguments);
	methods.forEach(function(methods){
		promisify(instance, methods);
	});
	return instance;
}