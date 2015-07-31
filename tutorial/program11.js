var http = require('http');
var fs = require('fs');

var portNumber = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(request, response) {
	console.log(request);
	var fileStream = fs.createReadStream(filePath);
	fileStream.pipe(response);
});

server.listen(portNumber);