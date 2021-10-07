
'use strict';

var AWSXRay = require('aws-xray-sdk-core')
var captureMySQL = require('aws-xray-sdk-mysql')
var mysql = captureMySQL(require('mysql2'))
const username = 'admin'
const password = 'Schito98'
const host = 'database-metlife.cmutd1p8nozi.us-east-2.rds.amazonaws.com'


// To allow Cross-origin resource sharing
const headers = {
    'Access-Control-Allow-Origin': '*',
};

// var contador=1;
//exports.handler = async (event, context, callback) => {
exports.handler = async (event) => {

console.log("-----------------------------------------> A1" )

var https = require('https');

var options = {
  host: 'sodev.anzen.com.mx',
  //port: 8237,
  port: 7777,
  path: '/carbon',
  method: 'GET'
};

console.log("-----------------------------------------> A2" )

var req = https.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});

console.log("-----------------------------------------> A3" )

}

