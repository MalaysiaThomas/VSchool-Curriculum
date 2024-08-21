//Insert text into header
let header = document.getElementById("header")
header.innerHTML = "<h1>DOM Messenger</h1>"


//Create subheading
let subheading = document.createElement("h2")
subheading.innerHTML = "<span>Malaysia T.</span> wrote the Javascript"
//Add subheading to header div
header.append(subheading)
//Center text in div
header.style.textAlign.center
//Color nametag
let spanTags = document.getElementsByTagName("span")
let nametag = spanTags[0]
nametag.style.color = "burlywood"


//Conversation text change
let p1Message1 = document.getElementsByClassName("message left")[0]
p1Message1.textContent = "Hey Caleb, here's a joke for you: When does a joke become a dad joke?"

let p2Message1 = document.getElementsByClassName("message right")[0]
p2Message1.textContent = "hmmm? not sure, when is it?"

let p1Message2 = document.getElementsByClassName("message left")[1]
p1Message2.textContent = "When it's apparent! haha, get it? A PARENT!"

let p2Message2 = document.getElementsByClassName("message right")[1]
p2Message2.textContent = "lol you're so corny... but I admit it is kind of funny lol"


//Clear conversation
let clearButton = document.getElementsByTagName("button")[0]
clearButton.addEventListener("click", function() {
    let messages = document.getElementsByClassName("messages")
    for (let i = 0; i < messages.length; i++) {
        messages[i].textContent = ""
    }
})


//Toggle message theme
let dropdown = document.getElementById("theme-drop-down")
let rightMessages = document.getElementsByClassName("right")
let leftMessages = document.getElementsByClassName("left")

dropdown.addEventListener("change", function() {
    let selection = dropdown.value
    
    if (selection === "theme-one") {
        for (let i = 0; i < rightMessages.length; i++) {
            rightMessages[i].style.backgroundColor = ""
            rightMessages[i].style.color = "black"
        }
        for (let i = 0; i < leftMessages.length; i++) {
            leftMessages[i].style.backgroundColor = ""
            leftMessages[i].style.color = "black"
        }
    } else {
        for (let i = 0; i < rightMessages.length; i++) {
            rightMessages[i].style.backgroundColor = "#9A2A2A"
            rightMessages[i].style.color = "white"
        }
        for (let i = 0; i < leftMessages.length; i++) {
            leftMessages[i].style.backgroundColor = "#3f3b3b"
            leftMessages[i].style.color = "white"
        }
    }
})





