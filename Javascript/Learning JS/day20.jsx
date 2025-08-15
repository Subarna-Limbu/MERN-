import { useState, useEffect } from "react";

export default function MultiListApp() {
  const [lists, setLists] = useState({});
  const [currentList, setCurrentList] = useState("Groceries");
  const [input, setInput] = useState("");
  const [newListName, setNewListName] = useState("");

  // Load from LocalStorage
  useEffect(() => {
    const savedLists = localStorage.getItem("multiLists");
    if (savedLists) {
      setLists(JSON.parse(savedLists));
    } else {
      setLists({ Groceries: [] }); // default
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("multiLists", JSON.stringify(lists));
  }, [lists]);

  const addItem = () => {
    if (!input.trim()) return;
    setLists({
      ...lists,
      [currentList]: [...lists[currentList], input]
    });
    setInput("");
  };

  const removeItem = (index) => {
    setLists({
      ...lists,
      [currentList]: lists[currentList].filter((_, i) => i !== index)
    });
  };

  const addNewList = () => {
    if (!newListName.trim() || lists[newListName]) return;
    setLists({ ...lists, [newListName]: [] });
    setNewListName("");
    setCurrentList(newListName);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">📂 Multi-List Manager</h1>

      {/* List Selector */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {Object.keys(lists).map((list) => (
          <button
            key={list}
            onClick={() => setCurrentList(list)}
            className={`px-4 py-2 rounded-lg ${
              list === currentList
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {list}
          </button>
        ))}
      </div>

      {/* Add new list */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New list name"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          className="flex-grow border border-gray-300 p-2 rounded-lg"
        />
        <button
          onClick={addNewList}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          ➕
        </button>
      </div>

      {/* Add item */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder={`Add to ${currentList}`}
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

      {/* List Items */}
      <ul className="space-y-2">
        {lists[currentList]?.map((item, index) => (
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
