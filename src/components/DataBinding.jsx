import React, { useState } from "react";
import './DataBinding.css'

export default function DataBinding() {
  const [value, setValue] = useState("")

  return (
    <div>
      Data Binding
      <input 
        type="text"
        placeholder="Enter Text"
      />
    </div>
  )
}