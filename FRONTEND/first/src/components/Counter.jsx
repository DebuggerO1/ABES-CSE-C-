import {useState} from 'react';

export const Counter()=>{
  const [count,setCount]= useState(0);
  function increment(){
    setCount(count+1);  
  }
  function decrement(){{
    setCount(count-1);
  }
  return(
    <div>
    <h1>Counter App</h1>
    <button onClick={increment}>+</button>
    <h2>{count}</h2>
    <button onclick={decrement}>-</button>
    </div>
  )
}

