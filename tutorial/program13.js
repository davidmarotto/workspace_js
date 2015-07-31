var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
	
	var urlMap = url.parse(request.url, true);
	//console.log(urlMap);
	
	var date = new Date(urlMap.query.iso);
	
	var pathName = urlMap.pathname;
	
	var returnObj = null;
	
	if (pathName == "/api/parsetime") {
		returnObj = {
				"hour": date.getHours(),
				"minute": date.getMinutes(),
				"second": date.getSeconds()
			};
	} else if (pathName == "/api/unixtime") {
		returnObj = {"unixtime": date.getTime()};
	} else {
		console.log("Invalid API path: " + pathName);
	}
		
	response.writeHead(200, {'Content-Type': 'application/json'});
	
	response.write(JSON.stringify(returnObj));
	response.end();
	
});

server.listen(process.argv[2]);