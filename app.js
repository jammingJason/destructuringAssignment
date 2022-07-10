// const obj = {
// 	numbers: {
// 		a: 1,
// 		b: 2
// 	}
// };

// let { numbers: { a, b } } = obj;
// var a = obj.numbers.a;
// var b = obj.numbers.b;

// const arr = [ 1, 2 ];
// [ ([ arr[0], arr[1] ] = [ arr[1], arr[0] ]) ];
// const temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

const raceResults = ([ ...drivers ]) => {
	let newObj = ({ first, second, third, ...theRest } = drivers);
	// const newObj = {
	// 	first,
	// 	second,
	// 	third
	// };

	console.log(newObj);
};
// Write a function called raceResults which accepts a single array argument.
// It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)
raceResults([ 'Tom', 'Margaret', 'Allison', 'David', 'Pierre' ]);

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
