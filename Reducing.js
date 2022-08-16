import SCRIPTS from "../SCRIPTS";
import SCRIPT from "../SCRIPTS";
/**
 *
 * @param {*} array
 * @param {*} combine
 * @param {*} start
 * this method takes repeatedly SINGLE ELEMENT from the array
 * COMBINE it with current value(START) to build a new value
 * the 3rd param may be omitted and in this case
 * we are saying to start from 0.
 * if start  value is given then we start from value as our
 * start point
 */
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

let array = [1, 2, 3, 4];
console.log(reduce(array, (a, b) => a + b, 0)); // 0+1+2+3+4 = 10
console.log(reduce(array, (a, b) => a * b, 0)); // 0*1*2*3*4 = 0
console.log(reduce(array, (a, b) => a * b, 2)); // 2*1*2*3*4 = 48
console.log(reduce(array, (a, b) => a + b, 2)); // 2+1+2+3+4 = 12

//using reduce twice to find script with the most charachers

//NOTE: here we destructure [from, to] as 2nd param list of
//reducer funct and
//the second call uses this to find the largest script
//by repeatedly comparing two scripts and returning the largest
function counteChar(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
console.log(
  SCRIPT.reduce((a, b) => {
    return counteChar(a) < counteChar(b) ? b : a;
  })
); // => {name: "Han", …}

// doing the same computation using for loop
let largest = null;
for (let script of SCRIPTS) {
  if (largest === null || counteChar(largest) < counteChar(largest)) {
    largest = script;
  }
}
console.log(largest); // => {name: "Han", …}

//finding the avarege year of living
//origin and dead script in the date set
function avarege(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// let livings = SCRIPTS.filter(s => s.living)
// console.log(livings)
// let years = livings.map(y => y.year)
// console.log(years)
// console.log(Math.round(avarege(years)))

//using short cat of the above code output livings
console.log(
  Math.round(avarege(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);
// => 1165

//output deads
console.log(
  Math.round(avarege(SCRIPTS.filter((s) => !s.living).map((y) => y.year)))
);
// =>204

//using loop for average
let total = 0,
  counter = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    counter += 1;
  }
}
console.log(Math.round(total / counter)); // => 1165

let total = 0,
  counter = 0;
for (let script of SCRIPTS) {
  if (!script.living) {
    total += script.year;
    counter += 1;
  }
}
console.log(Math.round(total / counter)); // => 204
