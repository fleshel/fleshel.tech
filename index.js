const http = require('http')
	,  fs = require('fs')

const express = require('express')
const app = express();

const _PORT_ = 8888;

app.get('/', (resquest, response, next) => {
	res.send('test');
});

const server = http.createServer(app).listen(8080, () => {
	console.log('server lisetening on port 8080');
});
