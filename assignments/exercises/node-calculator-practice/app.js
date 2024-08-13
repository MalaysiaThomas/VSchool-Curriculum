//Import readline-sync
const readline = require("readline-sync")

//Create a function for each operation
const add = (num1, num2) => num1 + num2 ;
const subtract = (num1, num2) => num1 - num2 ;
const multiply = (num1, num2) => num1 * num2 ;
const divide = (num1, num2) => num1 / num2 ;

//Request input ; convert string to number
const input1 = readline.question("Please enter your first number: ")
const num1 = +input1
const input2 = readline.question("Please enter your second number: ")
const num2 = +input2

//Create an array to allow user to choose operation from list
const operations = ['add', 'subtract', 'multiply', 'divide']

let operation = readline.keyInSelect(operations, "Please enter the operation to perform: ")

//Trigger function based on choice of operation
if (operation === 0) {
    console.log(add(num1, num2)) 
} else if (operation === 1){
    console.log(subtract(num1, num2)) 
} else if (operation === 2) {
    console.log(multiply(num1, num2)) 
} else if (operation === 3) {
    console.log(divide(num1, num2)) 
}