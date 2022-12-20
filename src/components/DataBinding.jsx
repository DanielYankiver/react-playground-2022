import React, { useState } from "react";
import './DataBinding.css'

export default function DataBinding() {
  const [value, setValue] = useState("")

  return (
    <div className="data-binding-container">
      Data Binding
      <input 
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {" "} === {value}
    </div>
  )
}