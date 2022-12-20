import React, { useState } from "react";
import './ShowHide.css'

export default function ShowHide() {
  const [show, setShow] = useState(true)

  return (
    <div className="show-hide-container">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "Show Element"}
      </button>
      {show && <div>Toggle Me 🛸</div>}
    </div>
  )
}