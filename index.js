'use strict';
console.log('Loading function');
var rp = require('request-promise');
exports.handler = (event, context, callback) => {    

    var options = {
    uri: 'https://sodev.anzen.com.mx',
    method: 'GET',
    body: {

    },
    json: true 
};


    rp(options).then(function (parsedBody) {
            console.log(parsedBody);
        })
        .catch(function (err) {
            // POST failed... 
            console.log(err);
        });

    context.done(null);
};
