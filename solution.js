/**
*	Chef and Cake solution
*
*	@author : Lakha Singh
*/

// Read Input from console
var readInput = function( callback ){
	process.stdin.setEncoding('utf8');
	callback = callback || function(){};

	// Start Listening to user input
	process.stdin.addListener('data', function( data ){
		callback( data );
	});
};

// Process input as per problem statement
function processInput( callback ){
	var i = 3, input = [], helper;

	callback = callback || function(){};

	readInput(function( data ){
		helper = data.split(' ');
		if ( i == 3 ){
			input.push({
				N: parseInt( helper[0], 10),
				K: parseInt( helper[1], 10),
				Q: parseInt( helper[2], 10)
			});
		}

		elseif ( i == 2 ){
			input.push({
				a: parseInt( helper[0], 10),
				b: parseInt( helper[1], 10),
				c: parseInt( helper[2], 10),
				d: parseInt( helper[3], 10),
				e: parseInt( helper[4], 10),
				f: parseInt( helper[5], 10),
				r: parseInt( helper[6], 10),
				s: parseInt( helper[7], 10),
				t: parseInt( helper[8], 10),
				m: parseInt( helper[9], 10),
				A: parseInt( helper[10], 10)
			});
		}

		elseif ( i == 1 ){
			input.push({
				L1: parseInt( helper[0], 10),
				La: parseInt( helper[1], 10),
				Lc: parseInt( helper[2], 10),
				Lm: parseInt( helper[3], 10),
				D1: parseInt( helper[4], 10),
				Da: parseInt( helper[5], 10),
				Dc: parseInt( helper[6], 10),
				Dm: parseInt( helper[7], 10)
			});
		}
		i--;

		if ( i == 0 ){
			callback( input );
		}
	});	
}

var createIngridients = function( input ){

}

var createDishes = function( input ){

}

var findDishQualities = function( dishes, ingridients ){

}

var calcSumAndProduct = function( dishQualities ){

}

// start
processInput(function(input){
	// Ingridients
	var A = [];

	// dishes
	var Q = [];

	// Dish Qualities
	var DQ = [];
	
	A = createIngridients( input );

	Q = createDishes( input );

	DQ = findDishQualities( Q, A );

	console.log( calcSumAndProduct( DQ ) );
});