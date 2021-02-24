const http = require('http')
	, https = require('https')
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

const env = process.env.NODE_ENV || 'dev';

if(env == 'dev')
{
	const server = http.createServer(app).listen(_PORT_, () => {
		console.log('server listening on port ' + _PORT_);
	});
} else {
	//production
	//we need https

	const options = {
		key: fs.readFileSync('privkey.pem'),
		cert: fs.readFileSync('cert.pem')
	};

	const server = https.createServer(options, app).listen(_PORT_, () => {
		console.log('server listening on port ' + _PORT_);
	});

}
