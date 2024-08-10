// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2){
    return num1 + num2
}

// Write a function that accepts three numbers as parameters, 
// and returns the largest of those numbers.
function largestNum(num1, num2, num3){
    return Math.max(num1, num2, num3)
}

// Write a function that accepts one number as a parameter, 
// and returns whether that number is even or odd. (Return the string "even" or "odd");
function evenOrOdd(num){
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

// Write a function that accepts a string as a parameter. 
// If the length of the string is less than or equal to twenty characters long, 
// return the string concatenated with itself (string + string). If the string 
// is more than twenty characters long, return the first half of the string.
function manipulateString(str){
    if (str.length <= 20) {
        return str + str
    } else {
        let strHalfLength = Math.floor(str.length / 2)
        let newstr = str.substr(0, strHalfLength)
        return newstr
    }
}

// Optional Challenges //

// Write a function that accepts a number ‘n’ as a parameter. 
// Then print the first ‘n’ Fibonacci numbers and return their sum.
function printFibonacciNum(n){
    let num1 = 0
    let num2 = 1 
    let sum = num1
    for(let i = 0; i < n; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        sum += num1;
    }
    return sum
}

// Write a function that accepts a string as a parameter. 
// Return the most frequently occuring letter in that string.
// *White spaces count as a character*
function mostFrequentLetter(string){
    // Create empty object to store character count
    let charCounter = {}
    // Loop through each character
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        // If char is already in array, increase its count ELSE add it with a count of 1
        if (charCounter[char]) {
            charCounter[char]++
        } else {
            charCounter[char] = 1
        }
    }

    let highestCount = 0
    let mostFrequentChar = ''

    // Loop through all keys (char) in charCounter object
    for (let char in charCounter) {
        if (charCounter[char] > highestCount) {
            highestCount = charCounter[char]
            mostFrequentChar = char
        }
    }
    return mostFrequentChar
}

module.exports = {
    sum,
    largestNum,
    evenOrOdd,
    manipulateString,
    printFibonacciNum,
    mostFrequentLetter
}
