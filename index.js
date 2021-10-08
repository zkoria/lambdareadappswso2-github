
const https = require('https')

const options =  {
hostname : 'sodev.anzen.com.mx',
port: 8237,
path: '/',
method: 'GET'
};

const doRequest = () => new Promise((resolve, reject) => {
    const https = require('https');
    const options = {
        hostname: 'sodev.anzen.com.mx',
        port: 8237,
        path: '/getapps',
        method: 'GET'
    }
    const req = https.request(options, res => {
        var r = '';
        res.on('data', (d) => {
            r += d;
        });
        res.on('end', function () {
            resolve(JSON.parse(r))
        });
    })
    req.on('error', (e) => {
        reject(e.message)
    })
    req.end()
})


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






