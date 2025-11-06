import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Counter App</h1>
      <div style={styles.counterBox}>
        <button style={styles.button} onClick={decrement}>-</button>
        <h2 style={styles.count}>{count}</h2>
        <button style={styles.button} onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;