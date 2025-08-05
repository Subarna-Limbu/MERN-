await fetch("http://localhost:3000/groceries", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ item: "Eggs" })
});
