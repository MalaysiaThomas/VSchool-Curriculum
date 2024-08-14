var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// Remove the last item from the vegetable array.
vegetables.pop()
console.log("vegetables: ", vegetables)

// Remove the first item from the fruit array.
fruit.shift()
console.log("Fruits: ", fruit)

// Find the index of "orange."
const indexOfOrange = fruit.indexOf("orange")
console.log("Index of Orange: ", indexOfOrange)

// Add that number to the end of the fruit array.
fruit.push(indexOfOrange)
console.log("Fruit: ", fruit)

// Use the length property to find the length of the vegetable array.
const vegetableLength = vegetables.length
console.log("Vegetable Length: ", vegetableLength) 

// Add that number to the end of the vegetable array.
vegetables.push(vegetableLength)
console.log("Vegetables: ", vegetables)

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
const food = fruit.concat(vegetables)
console.log("Joined Arrays: ", food)

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)
console.log("Food spliced: ", food)

// Reverse your array.
const reverseFood = food.reverse()
console.log("Food reversed: ", reverseFood)

// Turn the array into a string and return it.
const foodString = reverseFood.join(",")
console.log(foodString)

// If you've done everything correctly, the last step should print the following string to the console:
// 3,pepper,1,watermelon,orange,apple
