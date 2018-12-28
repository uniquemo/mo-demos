import React, { useState } from 'react'

let firstRender = true;

export default function OrderDemo() {
  let initName
  
  if(firstRender){
    [initName] = useState("Rudi");
    firstRender = false;
  }
  const [firstName, setFirstName] = useState(initName);
  const [lastName, setLastName] = useState("Yardley");

  return (
    <div>
      <div>firstName: {firstName}</div>
      <div>lastName: {lastName}</div>
      <button onClick={() => setFirstName("Fred")}>Fred</button>
    </div>
  )
}
