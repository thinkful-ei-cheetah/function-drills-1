'use strict';

function repeat(fn, n) {
  for (let i=1; i<=n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

// repeat(hello, 5);
// repeat(goodbye, 5);

function filter(arr, callback) {
  // TASK: Define your function here
  let results = [];
  for (let i=0; i<arr.length; i++) {
    if (callback(arr[i])) {
      results.push(arr[i]);
    }
  }
  return results;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

// console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// BONUS, using arrow function
// console.log(filter(myNames, (name) => name[0] === 'R'));

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function (location) {
    warningCounter++;
    return `
      DANGER! There is a ${typeOfWarning} hazard at ${location}.
      The ${typeOfWarning} hazard has triggered ${warningCounter} ${warningCounter > 1 ? 'times' : 'time'} today!
    `;
  };
}

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// console.log(rocksWarning('Main St and Pacific Ave'));
// console.log(rocksWarning('Gulf and Bay to Bay Blvd'));

// const hailWarning = hazardWarningCreator('Hail');
// console.log(hailWarning('North B St and Page'));
// console.log(hailWarning('Tampa, Fl'));

const turtleMoves = [
  [0, 0], 
  [0, 5], 
  [-1, -3], 
  [-3, 1], 
  [2, -4], 
  [3, 2]
];

const noBackwardOrRightMoves = turtleMoves.filter(move => move[0] >= 0 && move[1] >= 0);
// console.log(noBackwardOrRightMoves);

const totalMoves = noBackwardOrRightMoves.map(move => [move[0] + move[1]]);
// console.log(totalMoves);

// totalMoves.forEach((move, i) => {
//   console.log(`Move ${i+1}: ${move[0]} steps`);
// });





