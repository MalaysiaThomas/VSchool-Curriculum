//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

const capitalizeAndLowercase = (str) => {
    let uppercased = str.toUpperCase()
    let lowercased = str.toLowerCase()
    console.log(uppercased + lowercased)
}

capitalizeAndLowercase("hello")


// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

const findMiddleIndex = (str) => {
    halfOfStr = Math.floor(str.length / 2) 
    console.log(halfOfStr)
}

findMiddleIndex("Hello World")


// Write a function that uses `slice()` and the other functions you've written to return the first half of the given string.

const returnFirstHalf = (str) => {
    let halfOfStr = Math.floor(str.length / 2)
    let strHalf = str.slice(0, halfOfStr)
    console.log(strHalf)

}

returnFirstHalf("Hello World")


// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

const capilizeAndLowercase2 = (str) => {
    let halfOfStr = Math.floor(str.length / 2)
    let uppercasedHalf = str.slice(0, halfOfStr).toUpperCase()
    let lowercasedHalf = str.slice(halfOfStr).toLowerCase()
    let combinedStr = uppercasedHalf.concat(lowercasedHalf)
    console.log(combinedStr)
}

capilizeAndLowercase2("Hello World")



// ### **Optional Code Challenge**

// > (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
// > 

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.

// ```jsx
// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"
// ```

const capitalize = (str) => {
    //Empty array to store words after they are capitalized
    let storedChars = []
    //Convert string into an array
    let strSplit = str.split(" ") 
    //Function for letter capitalization and push to array 
    for(let i = 0; i < strSplit.length; i++) {
        //Convert each word in strSplit array to an array
        let charArr = strSplit[i].split("")
        //Capitilize the first letter of word 
        let firstLetter = charArr[0].toUpperCase()
        //Remove the first letter in word (lowercased version is still in charArr)
        charArr.shift()
        //Replace the first letter (originally lowercased) with its uppercased version
        charArr.unshift(firstLetter)
        //Convert array to string
        let newWord = charArr.join("")
        //Push new word to storedChars array
        storedChars.push(newWord)
    }
    //Convert array to string
    let firstLetterCapitalized = storedChars.join(" ")
    console.log(firstLetterCapitalized)
}

capitalize("hey friends! practice practice practice!")