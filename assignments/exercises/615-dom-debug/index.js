//Background color options for listed items
const colors = ["white", "red", "blue", "green"]

//Get input and div from index.html
const input = document.getElementById("input")
const list = document.getElementById("list")

//Create ul element; add as child to div id="list"
const subItemList = document.createElement("ul")
list.appendChild(subItemList)


//Add items to list
document.getElementById("add").addEventListener("click", function(){
    const userInput = input.value
    const subItem = document.createElement("li")    
    subItem.textContent = userInput
    subItemList.appendChild(subItem)
    createDropDown()
})


//Create dropdown to select color
function createDropDown(){
    const dropDown = document.createElement("select")    
    let listedItems = document.getElementsByTagName("li")
    //Get color options from 'colors' array
    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    //Adds dropdown to each item
    for (let i = 0; i < listedItems.length; i++) {
        listedItems[i].append(dropDown)
    }
    //Changes background color based on option selected
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
        //Changes text color to white for increased readability if background is colored
        if (e.target.value != "white") {
            e.target.parentElement.style.color = "white"
        } else {
            e.target.parentElement.style.color = "black"
        }
    })
}