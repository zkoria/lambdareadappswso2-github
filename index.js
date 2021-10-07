
const https = require('https')

const options =  {
hostname : 'https://sodev.anzen.com.mx:8237',
port: 443,
path: '/',
method: 'GET'
};

//exports.handler = async (event) => {
const doRequest = () => new Promise((resolve, reject) => {

  const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  var reponse;

  res.on('data', d => {
    //process.stdout.write(d)
    response+=d;
  })

        res.on('end', function () {
            resolve(result);
        });
 


   // console.log('response: ', response)
})

req.on('error', error => {
  console.error(error)
})

req.end()

}
)

exports.handler = async (event) => {


var m_response;
await doRequest()
.then((result) => {
	m_response = result;
})
.catch((err) => {
	m_response = err;
})

return m_response;
}






