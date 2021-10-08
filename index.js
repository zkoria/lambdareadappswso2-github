
// 003
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
    var response;
    await doRequest()
    .then((result) => {
        response = result;
    })
    .catch((err) => {
        response = err;
    })
    return response;
};


