const http = require('http')
	,  fs = require('fs')

const express = require('express')
const app = express();

const _PORT_ = 8888;

app.use(express.static('static'));
app.set('view engine', 'pug');
//use pug to render from ./views

app.set('views', './views');

app.get('/', function (req, res) {
	let homepage = `Jason Fleshel's Homepage`;
  	res.render('index', { title: homepage, message: homepage })
})
const server = http.createServer(app).listen(_PORT_, () => {
	console.log('server listening on port ' + _PORT_);
});
