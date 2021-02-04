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
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
const server = http.createServer(app).listen(_PORT_, () => {
	console.log('server listening on port ' + _PORT_);
});
