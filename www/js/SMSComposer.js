/**
 * SMS Composer plugin for Cordova
 * window.plugins.SMSComposer
 *
 * @constructor
 *

function SMSComposer()
{
	this.resultCallback = null;
}

SMSComposer.ComposeResultType =
{
Cancelled:0,
Sent:1,
Failed:2,
NotSent:3
}

SMSComposer.prototype.showSMSComposer = function(toRecipients, body)
{
    
	var args = {};
    
	if(toRecipients)
		args.toRecipients = toRecipients;
    
	if(body)
		args.body = body;
    
	cordova.exec("SMSComposer.showSMSComposer",args);
}

SMSComposer.prototype.showSMSComposerWithCB = function(cbFunction,toRecipients,body)
{
	this.resultCallback = cbFunction;
	this.showSMSComposer.apply(this,[toRecipients,body]);
}

SMSComposer.prototype._didFinishWithResult = function(res)
{
	this.resultCallback(res);
}

cordova.addConstructor(function() {
                       
					   if(!window.plugins)	{
					   window.plugins = {};
					   }
					   window.plugins.smsComposer = new SMSComposer();
					   });
*********/

cordova.define("cordova/plugin/smsComposer", function(require, exports, module) {
	var exec = require('cordova/exec');

	var SMSComposer = function() {};

	SMSComposer.prototype.showSMSComposer = function(success, failure, toRecipients, body) {

		var args = {};
    
	if(toRecipients)
		args.toRecipients = toRecipients;
    
	if(body)
		args.body = body;

	   exec(success, failure, 'SMSComposer', 'showSMSComposer', [toRecipients, body]);
	}

	SMSComposer.prototype.showSMSComposerWithCB = function(success, failure, cbFunction, toRecipients,body) {

	   	this.resultCallback = cbFunction;
		this.showSMSComposer.apply(this,[toRecipients,body]);
		exec(success, failure,'SMSComposer', 'showSMSComposerWithCB', [cbFunction, toRecipients, body]);
	}

	SMSComposer.prototype._didFinishWithResult = function(success, failure, res) {
	   this.resultCallback(res);
	   exec(success, failure, 'SMSComposer', '_didFinishWithResult', [res]);
	}

	var smsComposer = new SMSComposer();
	module.exports = smscomposer;
});


// ///////////////////
(function(gap){
// ///////////////////

// YOUR CODE HERE! 
// NOTE: Replace any PhoneGap, Cordova or cordova references with "gap" variable above

// the variables below support old to new references ///////////////////
})(window.PhoneGap || window.Cordova || window.cordova);
// ///////////////////


/* //usage:
   var mp = cordova.require("cordova/plugin/myplugin");
   var win  = function() { alert('win!');  }
   var fail = function() { alert('fail!'); }

   mp.foo(win, fail);
   mp.bar(win, fail);
   mp.baz(win, fail);
*/

/*
 (function(cordova) {
function SMSComposer()
{
	this.resultCallback = null;
}

SMSComposer.ComposeResultType =
{
Cancelled:0,
Sent:1,
Failed:2,
NotSent:3
}

SMSComposer.prototype.showSMSComposer = function(toRecipients, body)
{
    
	var args = {};
    
	if(toRecipients)
		args.toRecipients = toRecipients;
    
	if(body)
		args.body = body;
    
	cordova.exec("SMSComposer.showSMSComposer",args);
}

SMSComposer.prototype.showSMSComposerWithCB = function(cbFunction,toRecipients,body)
{
	this.resultCallback = cbFunction;
	this.showSMSComposer.apply(this,[toRecipients,body]);
}

SMSComposer.prototype._didFinishWithResult = function(res)
{
	this.resultCallback(res);
}

cordova.addConstructor(function() {
                       
					   if(!window.plugins)	{
					   window.plugins = {};
					   }
					   window.plugins.smsComposer = new SMSComposer();
					   });

//window.smsComposer = new SMSComposer();

})	(window.cordova || window.Cordova);
 */

 
