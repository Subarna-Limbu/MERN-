// Save data
localStorage.setItem("username", "Subarna");

// Get data
const name = localStorage.getItem("username");
console.log(name); // Subarna

// Remove one item
localStorage.removeItem("username");

// Clear all storage
localStorage.clear();


