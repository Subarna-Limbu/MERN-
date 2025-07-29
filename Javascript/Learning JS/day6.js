// DOM manipulation example

const button = document.getElementById("changeBtn");
const heading = document.getElementById("heading");

button.addEventListener("click", () => {
  heading.textContent = "Changed by JavaScript!";
});
// This code changes the text of the heading when the button is clicked