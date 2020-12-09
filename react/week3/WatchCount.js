import React, { useState, useEffect } from 'react';



function WatchCount() {
  const [count, setCount] = useState(0);
  
    useEffect(() => {
    //console.log('starting count')
    var timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
     // console.log('clear Time')
      clearTimeout(timer)
    }
  }, [count]);

  const reset = () => {
    setCount((prev) => 0);
  }
  return (
    <>
      
      <h2>You have used {count} seconds on this website <button onClick={reset}>Reset</button> </h2> 
    </>
  );
}

export default  WatchCount;