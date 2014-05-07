#!/usr/bin/env node

var isPrime = function(n) {
    // Check the numbers <= 3:
    if (n <= 3) {
	if (n <= 1) {
	    return false;
	}
	return true;
    }

    // Check divisibility by 2 and 3:
    if (!(n%2) || !(n%3)) {
	// console.log("DIV 2 and 3: " + n);
	return false;
    }
    
    // Check divisibility up to half in steps of 6:
    for (var i = 5, half = Math.ceil(Math.pow(n, 0.5)); i <= half; i = i + 6) {
	// console.log(half);
	if (!(n%i) || !(n%(i+2))) {
	    // console.log("DIV i: " + n + ", " + i);
	    return false;
	}
    }
    // console.log("Prime found: " + n);
    return true;
}

var count = 1;
var outstring = "2";
var num = 3;
while (count !== 100) {
    if (isPrime(num)) {
	count++;
	outstring = outstring + "," + num;
    }
    num += 2;
/*    if (num >= 5) {
	num += 6;
    } else {
	num += 1;
    }
*/
}
// console.log(outstring);
var fs = require ('fs');
var outfile = "hw1_2.txt";
fs.writeFileSync(outfile, outstring);


