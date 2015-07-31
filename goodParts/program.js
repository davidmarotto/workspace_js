if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}


var person = function() {

	var that = {};

	that.name = 'Dave';
	that.say_hello = function () {
		alert("Hello " + that.name);
	}

	return that;
}

var dave = person();
dave.say_hello();