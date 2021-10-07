
const https = require('https')

const options =  {
hostname : 'https://sodev.anzen.com.mx:8237',
port: 443,
path: '/',
method: 'GET'
};

exports.handler = async (event) => {

  const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  var reponse;

  res.on('data', d => {
    //process.stdout.write(d)
    response+=d;
  })
    console.log('response: ', response)
})

req.on('error', error => {
  console.error(error)
})

req.end()

}




