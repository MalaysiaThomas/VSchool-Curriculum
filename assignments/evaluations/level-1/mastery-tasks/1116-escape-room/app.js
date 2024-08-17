// Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.


const readline = require("readline-sync");

//Player greeting 
console.log("-----ESCAPE ROOM GAME-----")
let username = readline.question("\nHello! What's your name? ")
console.log(`\nWelcome, ${username}! Can you escape the room?? Get started by selecting one of the options below:`)

//Create a list of options for player to choose from
const options = ["Find the key", "Put hand in hole", "Open the door"]
//Destructuring options array for accessiblity 
const [findTheKey, putHandinHole, openDoor] = options

//If key is found, count will increase. Allowing user to open the door
let foundKeyCount = 0

//while loop checks player's input and responds accordingly
while(true) {
    //Stores index of player's chosen option
    const chooseOption = readline.keyInSelect(options, "Choose an option: ")
    if(chooseOption === options.indexOf(findTheKey)) {
        foundKeyCount++
        console.log("\nCongratulations! You found the key!")
    } else if(chooseOption === options.indexOf(putHandinHole)) {
        console.log("\nOH NO! You just touch the world's deadliest poison...and died!\n")
        process.exit()
    }else if(chooseOption === options.indexOf(openDoor) && foundKeyCount === 0) {
        console.log("\nYou have to find the key that opens the door. Come back later.")
    } else if (chooseOption === options.indexOf(openDoor) && foundKeyCount > 0) {
        console.log("\nCongratulations! You have opened the secret door!\n")
        process.exit()
    } else {
        console.log("\nYou've forfeited the game :(\n")
        process.exit()
    }
}
