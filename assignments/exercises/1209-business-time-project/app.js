const menuButton = document.getElementById("menuButton")
const navbar = document.getElementById("navbar-list")
const menuLinks = document.querySelectorAll("#navbar-list a");
const nametag = document.getElementById("nametag")
const articleSummary = document.getElementsByClassName("articleSummary")
const openArticleBtn = document.getElementsByClassName("openArticle")
const articleTitle = document.getElementsByClassName("articleTitle")
const footer = document.getElementById("contact")
const submitBtn = document.getElementById("submitBtn")
const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userPhone = document.getElementById("phone")
const userMessage = document.getElementById("message")


//Mobile Menu Functionality
menuButton.addEventListener("click", function(){ 
    let displaySetting = navbar.style.display
    navbar.style.height = "100dvh"

    if(displaySetting === "block") {
        navbar.style.display = "none"
        menuButton.textContent = "Open Menu"
    }else {
        navbar.style.display = "block"
        navbar.style.backgroundColor = "#431407"
        menuButton.textContent = "Close Menu"
    }

    // Close menu when any link is clicked
    menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        navbar.style.display = "none";
        menuButton.textContent = "Open Menu";
        });
    })
})

// HANDLE BUTTON CLICKS
buttonHandles = ["openGitCheat", "openGithubCheat", "openHTMLCheat", "openCSSCheat", "openCodeFoundCheat", "openJSCheat", "openJQCheat", "openWebDevCheat", "openSQLCheat"]

for(let i = 0; i < buttonHandles.length; i++) {
    let selectedButton = document.getElementById(buttonHandles[i])
    selectedButton.addEventListener("click", () => {
        switch(selectedButton.id) {
            case "openGitCheat":
                window.open("https://about.gitlab.com/images/press/git-cheat-sheet.pdf")
                break;
            case "openGithubCheat":
                window.open("https://github.com/lifeparticle/Markdown-Cheatsheet")
                break;
            case "openHTMLCheat":
                window.open("https://www.geeksforgeeks.org/html-cheat-sheet/")
                break;
            case "openCSSCheat":
                window.open("https://www.geeksforgeeks.org/css-cheat-sheet-a-basic-guide-to-css/")
                break;    
            case "openCodeFoundCheat":
                window.open("https://www.codecademy.com/learn/learn-how-to-code/modules/bop-i/cheatsheet")
                break;    
            case "openJSCheat":
                window.open("https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/")
                break;    
            case "openJQCheat":
                window.open("https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/")
                break;    
            case "openWebDevCheat":
                window.open("https://www.codecademy.com/learn/fscj-22-making-a-website-responsive/modules/wdcp-22-layout-with-flexbox-8a62abed-21fe-442a-8d4d-2b84f3d4ee3a/cheatsheet")
                break;    
            case "openSQLCheat":
                window.open("https://www.codecademy.com/learn/learn-sql/modules/learn-sql-manipulation/cheatsheet")
                break;   
        }
    })
}

// SHORTEN ARTICLE PREVIEWS
const articlePreview = () => {
    for (let i = 0 ; i < articleSummary.length; i++) {
        let articleSummaryContent = articleSummary[i].textContent

        if (articleSummaryContent.length > 150) {
            let abbreviatedSummary = articleSummaryContent.substring(0, 150)
            let preview = abbreviatedSummary + "..."
            articleSummary[i].textContent = preview
        }
    }
}
articlePreview()


//OPEN ARTICLE
for (let i = 0; i < openArticleBtn.length; i++) {
openArticleBtn[i].addEventListener("click", () => 
alert("Opening...\n" + articleTitle[i].textContent))
}

//SUBMIT 
submitBtn.addEventListener("click", (e) => {
    e.preventDefault()    
    let name = userName.value
    let email = userEmail.value
    let message = userMessage.value 

    if (name.length === 0 || email.length === 0 || message.length === 0) {
        alert("Please completed all required fields") 
    } else {
        alert( "Thank you " + name + "! You will be hearing from me shortly!") 

        userName.value = ""
        userEmail.value = ""
        userPhone.value = ""
        userMessage.value = ""
    }
})
    
    





