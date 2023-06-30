import React, { useState } from "react";
import "./styles/App.css";

function App() {
  // Declare a state variable for the counter value
  const [counter, setCounter] = useState(1);

  // Define a function to increment the counter
  const increment = () => {
    setCounter(counter + 1);
  };

  // Define a function to decrement the counter
  const decrement = () => {
    setCounter(counter - 1);
  };

  // Define a function to determine the class name for the counter div
  const getClassName = () => {
    // If the counter is divisible by both 3 and 5, return "fizzbuzz"
    if (counter % 3 === 0 && counter % 5 === 0) {
      return "fizzbuzz";
    }
    // If the counter is divisible by 3, return "fizz"
    if (counter % 3 === 0) {
      return "fizz";
    }
    // If the counter is divisible by 5, return "buzz"
    if (counter % 5 === 0) {
      return "buzz";
    }
    // Otherwise, return "normal"
    return "normal";
  };

  return (
    <div className="App">
      {/* Render the counter div with the dynamic class name */}
      <div id="counter" className={getClassName()}>
        {counter}
      </div>
      {/* Render the increment and decrement buttons */}
      <button id="increment" onClick={increment}>
        Increment
      </button>
      <button id="decrement" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
