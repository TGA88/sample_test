import React, { useState } from "react";

function Stepper() {
  const [score, setScore] = useState(0);

  function increase(e) {
    setScore(score + 1);
  }

  function decrease(val) {

    setScore(score - 1);
  }

  return (
    <div>
      <div>
        <span data-testid='txtScore'>{score}</span>
      </div>
      <button onClick={increase} >+</button>
      <button onClick={decrease} >-</button>
    </div>
  )
}


export default Stepper;


