import React, { useState } from "react";
export default function Hook1Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guest");
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <center>
        <input type="checkbox" checked = {checked}
        onChange={() => setChecked(!checked)} />
        
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button onClick={() => setCount(count - 1)}>Decreament</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <br />
        <h1>Username: {name}</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </center>
    </div>
  );
}
