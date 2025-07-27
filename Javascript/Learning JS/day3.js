/** 
// Arrays and Loops

const nums =[2,4,6,8,10];
const fruits = ['apple', 'banana', 'cherry', 'date'];

for (let i=0;i<nums.length;i++){
    console.log(nums[i]);
    for (let fruit of fruits){
    console.log(fruit + nums[i]);
}
}
fruits.forEach((item,i) => console.log(i,item));

//map()
const doubled =nums.map(n=>n*3);
console.log(doubled);

//filter()
const bigNums =fruits.filter(fruit => fruit ==="apple" );
console.log(bigNums);

//reduce()
const total =nums.reduce((a,c) => a + c,0);
console.log(total);
*/


// Grocery List Example
/** 
 * Grocery List Application
 * This application allows users to add, remove, and clear grocery items.
 * It also displays the current list of items.
 */
//show available items
// Select DOM elements
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const showBtn = document.getElementById('showBtn');
const groceryListUl = document.getElementById('groceryList');

let groceryList = [];

// Function to render the list on the page
function renderList() {
  groceryListUl.innerHTML = ''; // Clear the current list

  groceryList.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;

    // Add a remove button next to each item
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '10px';
    removeBtn.addEventListener('click', () => {
      removeItem(index);
    });

    li.appendChild(removeBtn);
    groceryListUl.appendChild(li);
  });
}

// Function to add an item
function addItem() {
  const item = itemInput.value.trim();
  if (item === '') {
    alert('Please enter an item!');
    return;
  }
  groceryList.push(item);
  itemInput.value = ''; // Clear input
  renderList();
}

// Function to remove item by index
function removeItem(index) {
  groceryList.splice(index, 1);
  renderList();
}

// Function to clear entire list
function clearList() {
  groceryList = [];
  renderList();
}

// Event listeners for buttons
addBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearList);

// Bonus: Add item by pressing Enter key
itemInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addItem();
  }
});


