import { saveToStorage, getFromStorage } from './utils.js';
import { renderList } from './dom.js';

const form = document.getElementById("form");
const input = document.getElementById("itemInput");
const listUl = document.getElementById("list");

let groceries = getFromStorage("groceries");

renderList(groceries, listUl, deleteItem);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = input.value.trim();
  if (item) {
    groceries.push(item);
    saveToStorage("groceries", groceries);
    renderList(groceries, listUl, deleteItem);
    input.value = "";
  }
});

function deleteItem(index) {
  groceries.splice(index, 1);
  saveToStorage("groceries", groceries);
  renderList(groceries, listUl, deleteItem);
}
