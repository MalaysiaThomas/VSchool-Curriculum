/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

const enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function findWinner (isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (let i = 0; i < enemies.length; i++) {
    if (i % 2 === 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(findWinner(isThereKryptonite, enemies[i]));
}

function loisLaneAttractionRating () {
    //Generate random number 1 - 10(inclusive) (least - most attractive)
    return Math.floor((Math.random() * 10) + 1);
}

console.log(loisLaneAttractionRating());

let clarkKent = true;
let superman = false;

while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    // Generate random number to change identity
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}
