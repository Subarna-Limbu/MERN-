function GroceryApp() {
  const [items, setItems] = React.useState(() => {
    // Initialize from localStorage if exists
    const storedItems = localStorage.getItem("groceryItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [input, setInput] = React.useState("");

  function addItem(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const newList = [...items, input.trim()];
    setItems(newList);
    setInput("");
  }

  function deleteItem(indexToDelete) {
    const newList = items.filter((_, index) => index !== indexToDelete);
    setItems(newList);
  }

  // Save to localStorage whenever items change
  React.useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h2>Grocery List 🛒</h2>
      <form onSubmit={addItem}>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add item..."
        />
        <button>Add</button>
      </form>

      {items.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item} 
              <button onClick={() => deleteItem(index)}>
