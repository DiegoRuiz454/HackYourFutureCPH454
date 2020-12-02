import React, { useState, useEffect } from 'react';
import Todo from './Todo';

function WatchCount() {
  const [count, setCount] = useState(0);
  
    useEffect(() => {
   // console.log('starting count')
    var timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      //console.log('clear Time')
      clearTimeout(timer)
    }
  }, [count]);

  const reset = () => {
    setCount((prev) => 0);
  }
  return (
    <>
      <h1>TODO LIST</h1>
      <h1>You have used {count} seconds on this website</h1>
      <button onClick={reset}>Reset</button> 
      <Todo />
      
      
    </>
  );
}

export default  WatchCount;