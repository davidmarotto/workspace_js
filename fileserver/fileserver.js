var http = require('http');
var url = require('url');
var fs = require('fs');

var filename = 'README.md';

var server = http.createServer(function(req, res) {
	console.log(req.url);
	console.log(url.parse(req.url));
	
	fs.stat(filename, function(err, stats) {
		if (err) {
			res.statusCode = 400;
			resp.end('Error');
		} else {
			var stream = fs.createReadStream(filename).pipe(res);
			stream.on('error', function(err) {
				res.statusCode = 500;
				res.end('Error');
			});
		}
		
	});
	
	
	
	//res.end('hallo');
});

server.listen(3001, function(err) {
	if (err) {
		console.log(err);
	}
});

