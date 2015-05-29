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
	var N = input[0].N;
	var a = input[1].a;
	var b = input[1].b;
	var c = input[1].c;
	var d = input[1].d;
	var e = input[1].e;
	var f = input[1].f;
	var r = input[1].r;
	var s = input[1].s;
	var t = input[1].t;
	var m = input[1].m;
	var A = [], x;

	A[1] = input[1].A;

	for ( x = 2; x <= N; i++ ){
		if(t^x % s  <= r) {
			 A[x] = (a*A[x-1]^2 + b*A[x-1] + c) % m
		}   
	    else{
	        A[x] = (d*A[x-1]^2 + e*A[x-1] + f) % m
	    }
	}

	return A;
}

var min = function(a, b){
	return a < b ? a : b;
}

var createDishes = function( input ){
	var Q = input[0].Q;
	var L1 = input[2].L1;
	var La = input[2].La;
	var Lc = input[2].Lc;
	var Lm = input[2].Lm;
	var D1 = input[2].D1;
	var Da = input[2].Da;
	var Dc = input[2].Dc;
	var Dm = input[2].Dm;

	var dish = [], i, L, R;

	for (i = 1; i <= Q; i++){
	    L1 = (La * L1 + Lc) % Lm;
	    D1 = (Da * D1 + Dc) % Dm; 
	    L = L1 + 1;
	    R = min(L + K - 1 + D1, N);
	    dish.push({
	    	L: L,
	    	R: R
	    });
	}
	
	return dish;
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