import React, { useState } from "react";
import './DisableButton.css'

export default function DisableButton() {
  const [value, setValue] = useState("")
  
  return (
    <div>
      <h4>Disable Button</h4>
      <input 
        type="text"
        onChange={(e) => setValue(e.target.ariaValueText)}
      />
      <button disabled={value.length < 1}>Submit</button>
    </div>
  )
}