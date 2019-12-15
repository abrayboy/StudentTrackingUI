var path = require('path');

exports.Logger = function(context)  {


    this.log = text => {
        console.log(`[LOG] => ${context}:      ${text}.`);
    };

    this.info = text => {
        console.info(`[INFO] => ${context}:      ${text}.`);
    };

    this.debug = text => {
        console.log(`[DEBUG] => ${context}:      ${text}.`);
    };

    this.error = text => {
        console.log(`[ERROR] => ${context}:      ${text}.`);
    };

    this.trace = text => {
        console.trace(`[TRACE] => ${context}:      ${text}.`);
    }
}