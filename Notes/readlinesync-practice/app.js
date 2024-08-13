//Import readline-sync into app.js file
const readline = require("readline-sync");

//Wait for user's response
let username = readline.question("Hello! What is your name? ");
console.log("Welcome, " + username + "!");

//Handle for secret text
let password = readline.question("What is your current password? ", {
  hideEchoBack: true, // The typed text on screen is hidden by `*` (default)
});
console.log("Your password " + password + " has been saved successfully!");

//Get the user's response by a single key without the Enter key:
if (readline.keyInYN("Do you want this module?")) {
  // 'Y' key was pressed.
  console.log("Installing now...");
  // Do something...
} else {
  // Another key was pressed.
  console.log("Searching another...");
  // Do something...
}


//Let user choose from a list
animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
index = readline.keyInSelect(animals, 'Which animal?');
console.log('Ok, ' + animals[index] + ' goes to your room.');