



    const https = require('https');
    const options = {
        hostname: 'sodev.anzen.com.mx',
        port: 8237,
        path: '/getapps',
        method: 'GET'
    }


const doRequest = () => new Promise((resolve, reject) => {
console.log('A1')
    const req = https.request(options, res => {
console.log('A2')
        var r = '';
        res.on('data', (d) => {
            r += d;
        });
        res.on('end', function () {
console.log('A3')
            resolve(JSON.parse(r))
        });
    })
    req.on('error', (e) => {
        reject(e.message)
    })

console.log('A4')
    req.end()
})


exports.handler = async (event) => {


var m_response;
await doRequest()
.then((result) => {
console.log('A0')
	m_response = result;
})
.catch((err) => {
	m_response = err;
})

return m_response;
}






