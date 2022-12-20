import React, { useState } from "react"
import "./Counter.css"

export default function Counter() {
  const [counter, setCounter] = useState(0)
  
  return (
    <div>
      <h4>Counter: {counter}</h4>
      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  )
}