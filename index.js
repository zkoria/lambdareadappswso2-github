
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



const https = require('https')
let url = "https://sodev.anzen.com.mx"

exports.handler =  function(event, context, callback) {
  https.get(url, (res) => {
    callback(null, res.statusCode)
  }).on('error', (e) => {
    callback(Error(e))
  })
}


