function GroceryApp() {
  const [items, setItems] = React.useState(["Milk", "Bread", "Eggs"]);
  
  function deleteItem(indexToDelete) {
    const newItems = items.filter((_, index) => index !== indexToDelete);
    setItems(newItems);
  }
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} 
          <button onClick={() => deleteItem(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
