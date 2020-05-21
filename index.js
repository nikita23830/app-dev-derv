var express = require('express');
var fs = require('fs');
var app = express();
const https = require('https');

const options = {
    key: fs.readFileSync('./private.key'),
    cert: fs.readFileSync('./certificate.crt')
};

app.use('/app', express.static(__dirname + '/public'))

const server = https.createServer(options, app);

server.listen(443, () => {    
    console.log(`Static`)
});