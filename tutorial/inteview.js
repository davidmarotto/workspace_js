var str = "Hello";

console.log (str.split('').reverse());

console.log(5 === "5");

if (1) {
	console.log(true);
} else {
	console.log(false);
}

if (null) {
	console.log(true);
} else {
	console.log(false);
}

if (0) {
	console.log(true);
} else {
	console.log(false);
}

/*
if (poo || 1) {
	console.log(true);
} else {
	console.log(false);
}
*/



(function(){
	  var a = b = 3;
	})();

	console.log("a defined? " + (typeof a !== 'undefined'));
	console.log("b defined? " + (typeof b !== 'undefined'));
	
	

var arr1 = "Hello World";
var arr2 = arr1;
arr2 = arr2.split('').reverse().join('');
console.log(arr1);
console.log(arr2);

arr2 += 'baby';
console.log(arr1);
console.log(arr2);