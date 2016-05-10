var http = require('http');
var mongo = require('./mongo');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello world');
}).listen(8080, 'localhost');

var mongoClient = mongo.init();
var data = mongo.seed();
var connectionUrl = 'localhost:27017/node-tut'
mongo.insert(mongoClient,connectionUrl,data);
console.log('server up and running at http://localhost:8080');