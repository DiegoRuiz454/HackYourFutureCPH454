import './App.css'; 
import React, {useState} from 'react';
import usePrevious from './usePrevious.js';

//-----fibonacci numbers code:

const Counter = () => {
  const [counterState, setCounterState] = useState(1);

  // ... some code here

  const Increment = usePrevious(counterState);
  const fibonacci = () => {
  setCounterState (counterState + Increment );
  };

  return (
    
    <div>
      <h3>FIBONACCI NUMBERS HACKYOUFUTURE</h3>
      <button onClick={fibonacci}>click me</button>
      <div> {Increment}</div>
    </div>    
  );
}

export default Counter;