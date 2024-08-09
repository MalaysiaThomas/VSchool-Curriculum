let changeTextContent = (elementId, newText) => {
    let selectedElement = document.getElementById(elementId)
    selectedElement.textContent = newText
}

//changeTextContent('heading', 'Welcome! Want to see a trick??');
//changeTextContent('changeButton', 'Press me');


let changeButton = document.getElementById("changeButton")
changeButton.addEventListener("click", changeTextContent = () => {
    let paragraph = document.getElementsByTagName("p")[0]
    paragraph.textContent = "And that button just made me change!"
})

