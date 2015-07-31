var http = require('http');

http.get('http://backbone-beginner.herokuapp.com/users', function(response) {
	console.log(response.statusCode);

	response.on('data', function(chunk) {
		console.log(chunk.toString());
	});
	
	response.on('end', function() {
		console.log('end');
	});
	
	response.on('error', function(e) {
		console.log("Error: " + e.message);
	});

});