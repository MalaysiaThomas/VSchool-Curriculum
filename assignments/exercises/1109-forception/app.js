//Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet. Using a for loop within a for loop, create and return array that looks like this:

/*
function forception(people, alphabet){
    // your code here
}
// Output:
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
*/


var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

const forception = (people, alphabet) => {
    //Create an empty array to push indexes to 
    let personAlphaArr = []
    //for loop to handle people
    for(let i = 0; i < people.length; i++) {
        //Add a colon to the end of each persons name 
        let person = people[i].concat(":")
        //Push each person to the personAlphaArr array
        personAlphaArr.push(person)
        
        //Nested for loop to handle alphabet
        for(let j = 0; j < alphabet.length; j++) {
            //Create an alphabet array with uppercased letters
            let alphabetArray = alphabet.toUpperCase().split("")
            //Push each letter to the personAlphaArr array
            personAlphaArr.push(alphabetArray[j])
        }
    }
    //Prints final personAlphaArr array
    console.log(personAlphaArr)
}

forception(people, alphabet)