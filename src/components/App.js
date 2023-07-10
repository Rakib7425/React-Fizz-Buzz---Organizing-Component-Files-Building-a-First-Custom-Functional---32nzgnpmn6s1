import React from "react";

import "../styles/App.css";

import { useState } from "react";

const App = () => {

// let[inc,setInc]=useState(0);

let [count, setCount] = useState(1);

return (

<div id="main">

<button

id="increment"

onClick={() => {

setCount((count) => count + 1);

}}

>

Increment

</button>

<div id="counter" className={ count % 3 === 0 && count % 5 === 0 ? "fizzbuzz" : count % 3 === 0 ? "fizz" : count % 5 === 0 ? "buzz" : "normal" } >{count}</div>

<button

id="decrement"

onClick={() => {

setCount((count) => count - 1);

}}

>

Decrement

</button>

</div>

);

};

export default App;
