import React, { useState } from 'react';
import './Book.css';

function Book({ title, price , image}) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="book">
      <img src= {image} alt="book"/>
      <h1 className="title">{title}</h1>
      <h2 className="price">₹{price}</h2>
      <div>
        <button className="btn" onClick={increment}>+</button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <button className="btn" onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default Book;
