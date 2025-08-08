import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // State: count

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
