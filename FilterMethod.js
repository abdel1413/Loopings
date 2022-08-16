import scripts from "../SCRIPTS";

/**
 *
 * @param {*} array
 * @param {*} test
 * filter methd filters out element that do not pass the test
 * and build up a new array with only those who passed the test
 */
function filtering(array, test) {
  let filteredArray = [];
  for (let element of array) {
    if (test(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

console.log(filtering(scripts, (script) => script.living));
// → [{name: "Adlam", …}, …]

console.log(filtering(scripts, (script) => script.direction));
// print out all the direction

console.log(filtering(scripts, (script) => script.year === "1599"));
//filter only the array containing the year 1599

//NOTE WE CAN USE "filter array standart method " for array when
//looking for specific elements

console.log(scripts.filter((script) => script.direction === "ttb"));
// // => 3 [{…}, {…}, {…}]
//// =>  {name: 'Mongolian', ranges: Array(7), direction: 'ttb', year: 1204, living: false, …}
// => 1: {name: 'Phags-pa', ranges: Array(2), direction: 'ttb', year: 1269, living: false, …}
// => 2: {name: 'SignWriting', ranges: Array(3), direction: 'ttb', year: 1974, living: true, …}
