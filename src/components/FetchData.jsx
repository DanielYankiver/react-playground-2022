import React, { useState, useEffect } from "react"
import "./FetchData.css"

export default function FetchData() {
  const [userData, setUserData] = useState({})

  const url = "https://jsonplaceholder.typicode.com/users/1";

  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData)
  }

  useEffect(() => {
    getUserData()
  }, [])
  
  
  return (
    <div className="fetch-data-container">
      <h4>Fetch Data</h4>
      <p>
        <strong>Name: </strong>{" "}
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  )
}