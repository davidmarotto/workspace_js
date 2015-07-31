var net = require('net');
var strftime = require('strftime')

var server = net.createServer(function(socket) {
	var currentDate = new Date();
	//socket.write(currentDate.toString());
	socket.write(strftime("%Y-%m-%d %H:%M", currentDate));
	socket.end();
});

server.listen(process.argv[2]);
