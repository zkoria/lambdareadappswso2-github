'use strict';
console.log('Loading function');
var rp = require('request-promise');
exports.handler = (event, context, callback) => {    

    var options = {
    uri: 'https://jsonplaceholder.typicode.com/todos',
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

    console.log('parsedBody: ', parsedBody)
    context.done(null);
};
