//Get form and list elements
const form = document["addItem"];
const list = document.getElementById("list");

//Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Get user inputted value
    const userInput = form.title.value;
    //Create li element
    const newItem = document.createElement("li");
    //Load user inputted value into a div; <div> is child of <li> element  
    newItem.innerHTML += `<div>${userInput}</div>`;
    //Adds new item to to-do list
    list.append(newItem);
    //Adds edit button and delete button to new item
    addButtons(newItem);
    //clear inputted value from form
    form.title.value = "";
})

//Function to create buttons
const addButtons = (newItem) => {
    //Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    //Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    //Add buttons to new item
    newItem.append(editButton);
    newItem.append(deleteButton);

    //Delete item
    deleteButton.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })

    //Edit and save item
    editButton.addEventListener("click", (e) => {
        //Get <div> element that contains the todo item
        let todoItem = e.target.previousSibling;
    
        if (editButton.textContent === "Edit") {
            let itemContent = todoItem.textContent;
            //Create input element
            const input = document.createElement("input");
            input.setAttribute("id", "input");
            //Set placeholder and value of input to original todo item
            input.placeholder = itemContent;
            input.value = itemContent;
            //Remove <div> element from previous sibling
            todoItem.innerHTML = "";
            //Add input element to prevous sibling 
            todoItem.append(input);
            //Change button from "edit" to "save"
            editButton.textContent = "Save";

        } else if (editButton.textContent === "Save") {
            const inputBox = document.getElementById("input");
            const update = inputBox.value;
            //Fills <div> with updated item
            todoItem.innerHTML = `<div>${update}</div>`;
            //Change button from "save" to "edit"
            editButton.textContent = "Edit";
        }
    })
}