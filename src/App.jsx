import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

import { useState } from "react";

function App () {

  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const exponentArr = [2,3,4,5,6,7];

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} decrement={decrement} increment={increment}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {exponentArr.map((element,index) => 
          (<Exponent num={count} exponent={element} key={index}/>)
        )}
      </div>
    </div>
  );
}

export default App;
