import { useState, useEffect } from "react";

export default function GroceryApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // Load from LocalStorage when app starts
  useEffect(() => {
    const savedItems = localStorage.getItem("groceryItems");
    if (savedItems) {
      setItems(JSON.parse(savedItems)); // convert back to array
    }
  }, []);

  // Save to LocalStorage whenever items change
  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">🛒 Grocery List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border border-gray-300 p-2 rounded-lg"
        />
        <button
          onClick={addItem}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
          >
            {item}
            <button
              onClick={() => removeItem(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
