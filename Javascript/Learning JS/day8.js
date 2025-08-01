const ul = document.getElementById("list");
console.log(ul.children); // HTMLCollection of <li>s

const form = document.querySelector("form");
const input = document.getElementById("itemInput");
const list = document.getElementById("list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const li = document.createElement("li");
  li.textContent = input.value;

  // Add delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  li.appendChild(delBtn);

  list.appendChild(li);
  input.value = "";

  // Add delete functionality
  delBtn.addEventListener("click", function () {
    li.remove(); // removes the <li> including the button
  });
});
