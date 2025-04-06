


import React, { useState } from "react";

function RefactorCounter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
    </div>
  );
}

export default RefactorCounter;
