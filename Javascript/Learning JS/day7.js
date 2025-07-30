const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // stops page reload
//   const task = input.value;
//   console.log("New Task:", task);
//   input.value = "";
// });
const list = document.getElementById("taskList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;

  const li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);

  input.value = "";
});
