'use strict';

const async = require('async');
const https = require('https');

module.exports.handler = function (event, context, callback) {

    let body = "";
    let countChunks = 0;

    async.waterfall([
        requestDataFromFeed,
        // processBody,
    ], (err, result) => {
        if (err) {
            console.log(err);
            callback(err);
        }
        else {
            const message = "Success";
            console.log(result.body);
            callback(null, message);
        }
    });

    function requestDataFromFeed(callback) {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        console.log(`Sending GET request to ${url}`);
        https.get(url, (response) => {
            console.log('statusCode:', response.statusCode);
            response.on('data', (chunk) => {
                countChunks++;
                body += chunk;
            });
            response.on('end', () => {
                const result = {
                    countChunks: countChunks,
                    body: body
                };
                callback(null, result);
            });
        }).on('error', (err) => {
            console.log(err);
            callback(err);
        });
    }
};
