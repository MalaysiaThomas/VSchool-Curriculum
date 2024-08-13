// Create function that takes an element's id and changes its text content
let changeTextContent = (elementId, newText) => {
  let selectedElement = document.getElementById(elementId);
  selectedElement.textContent = newText;
};

// Get the button with id "changeButton"
let changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
  // Get the first p tag in the document
  let paragraph = document.getElementsByTagName("p")[0];
  // Set p tag id to "paragraph"
  paragraph.setAttribute("id", "paragraph");
  // Call changeTextContent function
  changeTextContent("paragraph", "And that button just made me change!");
});
