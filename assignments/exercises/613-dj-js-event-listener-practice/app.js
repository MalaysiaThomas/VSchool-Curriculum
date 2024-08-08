let square = document.getElementById("shape");

//Turns square blue on hover
square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue"
})

square.addEventListener("mouseout", function() {
    square.style.backgroundColor = ""
})

//Turns square red when mouse is held down over shape
square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "red"
})

//Turns square yellow when mouse is lifted over shape
square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow"
})

//Turns square green when double-clicked
square.addEventListener("dblclick", function() {
    square.style.backgroundColor = "green"
})

//Turns square orange on scroll 
document.addEventListener("wheel", function() {
    square.style.backgroundColor = "orange"
})

//Colors square based on key pressed
document.addEventListener("keydown", function(e){
    let key = e.key
    if (key === "b" && "B") {
        square.style.backgroundColor = "blue";
    } else if (key === "r" && "R") {
        square.style.backgroundColor = "red";
    } else if (key === "y" && "Y") {
        square.style.backgroundColor = "yellow";
    } else if (key === "g" && "G") {
        square.style.backgroundColor = "green";
    } else if (key === "o" && "O") {
        square.style.backgroundColor = "orange";
    } else if (e.getModifierState("CapsLock")) {
        alert("Turn off caps lock")
    } else {
        alert("Invalid Selection. Try One of These Instead:\nType 'o' for orange\nType 'b' for blue\nType 'r' for red\nType 'y' for yellow\nType 'g' for green")
    }
})
