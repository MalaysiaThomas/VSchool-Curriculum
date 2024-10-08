//PART 1


//Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer",
];

let count = 0;
for (let i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    count++;
  }
}
console.log(count);

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male",
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female",
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female",
  },
  {
    name: "Sam",
    age: 30,
    gender: "male",
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female",
  },
];

for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log("Not old enough.")
    } else {
        console.log("Old enough.")
    }
}

//Optional challenge 1 for Mad Max problem
//Log to the console a personalized message like: "Mike is not old enough to see Mad Max" "or Madeline is old enough to see Mad Max"
for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    let name = peopleWhoWantToSeeMadMaxFuryRoad[i].name
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log(name + " is not old enough to see Mad Max.")
    } else {
        console.log(name + " is old enough to see Mad Max.")
    }
}

//Optional challenge 2 for Mad Max problem
//Check to see if the movie goer is a male or female for an even more personalized message: "Mike is not old enough to see Mad Max Fury Road, don't let HIM in." or "Madeline is old enough. SHE'S good to see Mad Max Fury Road."
for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    let name = peopleWhoWantToSeeMadMaxFuryRoad[i].name
    let gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && gender === "male") {
        console.log(name + " is not old enough to see Mad Max Fury Road, don't let him in.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && gender === "female") {
        console.log(name + " is not old enough to see Mad Max Fury Road, don't let her in.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && gender === "male") {
        console.log(name + " is old enough. He's good to see Mad Max Fury Road.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && gender === "female") {
        console.log(name + " is old enough. She's good to see Mad Max Fury Road.")
    }
}


//Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample Arrays:

// [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"

const arr = [2, 3, 2]
let sum = 0

for(i = 0; i < arr.length; i++) { 
    sum += arr[i]
}

if (sum % 2 === 0) {
    console.log("Thie light is off")
} else {
    console.log("The light is on")
}


//PART 2


//Loop through the following array, and log to the console "hooray" for every party there is.
var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

for(i = 0; i < eventsAtWork.length; i++) {
  if(eventsAtWork[i] === "party") {
    console.log("hooray")
  }
}

//Loop through the following array, and count how many "trues" there are.
var booleans = [true, true, false, true, false, false, false]
let trueCount = 0
for(i = 0; i < booleans.length; i++) {
  if (booleans[i] === true) {
    trueCount++
  }
}
console.log(trueCount)

//Add an isAdmin property to each of the users in this array.
var users = [
  {
    name: "Sophie",
    age: 12
  },
  {
    name: "Larry",
    age: 32
  },
  {
    name: "Cathy",
    age: 40
  }
]

for(i = 0; i < users.length; i++) {
  users[i].isAdmin = ""
}
console.log(users)