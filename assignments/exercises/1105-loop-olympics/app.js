//# **Preliminaries**
// 1. Write a for loop that prints to the console the numbers 0 through 9.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//2. Write a for loop that prints to the console 9 through 0.
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

//3. Write a for loop that prints these fruits to the console.
const fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

//# **Bronze Medal**

//1. Write a for loop that will push the numbers 0 through 9 to an array.
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}
console.log(numbers);

//2. Write a for loop that prints to the console only even numbers 0 through 100.
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//3. Write a for loop that will push every other fruit to an array.
const fruitArr2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const otherFruitArr = [];

for (let i = 1; i < fruitArr2.length; i += 2) {
  otherFruitArr.push(fruitArr2[i]);
}

console.log(otherFruitArr);

//# **Silver Medal**

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];

// Write a loop that will print out all the names of the people of the people array
for (let i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
const names = [];
const occupations = [];
for (let i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
const everyOtherNames = [];
const everyOtherOccupations = [];
for (let i = 0; i < peopleArray.length; i += 2) {
  everyOtherNames.push(peopleArray[i].name);
  everyOtherOccupations.push(peopleArray[i + 1].occupation);
}

console.log(everyOtherNames);
console.log(everyOtherOccupations);

//# **Gold Medal - Nesting**
// 1. Create an array that mimics a grid like the following using nested `for` loops:
/*
[[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]
*/

const zeroArrays = [];
for (let i = 0; i < 3; i++) {
  let rows = [];
  zeroArrays.push(rows);
  for (let j = 0; j < 3; j++) {
    rows.push(0);
  }
}

console.log(zeroArrays);

// 2.Create an array that mimics a grid like the following using nested `for` loops:
/*
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]
// */

const arr2 = [];
for (let i = 0; i < 3; i++) {
  let rows = [];
  arr2.push(rows);
  for (let j = 0; j < 3; j++) {
    rows.push(i);
  }
}

console.log(arr2);

// 3.Create an array that mimics a grid like the following using nested `for` loops:

/*
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]
*/

const arr3 = [];
for (let i = 0; i < 3; i++) {
  let rows = [];
  arr3.push(rows);
  for (let j = 0; j < 3; j++) {
    rows.push(j);
  }
}

console.log(arr3);

// 4. Given a grid like the previous ones, write a nested `for` loop that would change every number to an x.
/*
// var grid = [["x", ...],
//             ["x", ...],
//             ["x",...], ...]
*/

const arr4 = [];
for (let i = 0; i < 3; i++) {
  let rows = [];
  arr4.push(rows);
  for (let j = 0; j < 3; j++) {
    rows.push("x");
  }
}

console.log(arr4);