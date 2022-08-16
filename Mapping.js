import SCRIPTS from "../SCRIPTS";

/**
 *
 * @param {*} array
 * @param {*} transforms
 * NOTE: map method transforms an object array or array
 *  to new array from returned values by applying function
 * to all the object array elements.
 * the new array has the same length as the original
 */

function mapping(array, transforms) {
  let mappedElement = [];
  for (let element of array) {
    // let transformedElement = transforms(element)
    // mappedElement.push(transformedElement)
    mappedElement.push(transforms(element));
  }
  return mappedElement;
}

let rtlScripts = SCRIPTS.filter((sc) => sc.direction === "rtl");
console.log(mapping(rtlScripts, (script) => script.name));
// => (139) ['Adlam', 'Caucasian Albanian', 'Ahom', 'Arabic',...]

//the standart array method is: array.map(param => param.something)
let objectArray = [
  {
    name: "ab",
    range: [
      [10, 20],
      [21, 30],
      [31, 40],
    ],
    direction: "french",
    year: 1900,
    living: true,
  },
  {
    name: "bcd",
    range: [
      [0, 10],
      [11, 20],
    ],
    direction: "french",
    year: 1500,
    living: false,
  },
  {
    name: "bceao",
    range: [
      [40, 50],
      [51, 60],
    ],
    direction: "english",
    year: 2000,
    living: true,
  },
  {
    name: "ab",
    range: [71, 100],
    direction: "english",
    year: 2020,
    living: false,
  },
  {
    name: "abc",
    range: [
      [101, 200],
      [201, 210],
      [211, 220],
    ],
    direction: "english",
    year: 2022,
    living: true,
  },
  {
    name: "bbc",
    range: [
      [101, 200],
      [50, 90],
    ],
    direction: "deutsch",
    year: 2022,
    living: true,
  },
  {
    name: "abbcd",
    range: [
      [101, 200],
      [220, 300],
    ],
    direction: "english",
    year: 2022,
    living: true,
  },
];
