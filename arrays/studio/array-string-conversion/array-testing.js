let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];


//plug in "reverseCommas()" "semiDash()" "reverseSpaces()" and "commaSpaces()"
//to the "let stringReversed = _________" in order to test each function
//run "node index.js" to test all at once

let stringReversed = commaSpace();
console.log(stringReversed);

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check = strings[0].includes(',');

	let output;
	if (check === true) {
		output = strings[0].split(',').reverse().join(',');
	}

	//TODO: 2. write the code required for this step

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;

}

//3)
function semiDash() {
	let check = strings[1].includes(';');

	let output;
	if (check === true) {
		output = strings[1].split(';').sort().join('-');
	}

//TODO: write the code required for this step

  
	return output;
}

//4)
function reverseSpaces() {
	let check = strings[2].includes(' ');
	let output;
	if (check === true) {
		output = strings[2].split(' ').sort().reverse().join(' ');
	}
  //TODO: write the code required for this step

	return output;
}

//5)
function commaSpace() {
	let check = strings[3].includes(', ');
	let output;
	if (check === true) {
		output = strings[3].split(', ').reverse().join();
	}
	//TODO: write the code required for this step
  
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
