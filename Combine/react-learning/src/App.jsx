import React from "react";
import CardComponent from "./cardcomponent";
import FirstClass from "./firstclass";
import StateExample from "./CEAB2312/class_state";
import StringState from "./CEAB2312/string_state";
import RenderCond from "./CEAB2312/render_cond";
import ColorTheory from "./CEAB2312/colorTheory";

function App() {
  return (
    <div>
      <center>
        <h1>Hello World</h1>
      </center>
      <FirstClass />
      <br />
      <center>
        <div style={{ display: "inline-flex", gap: "10px" }}>
          <CardComponent />
          <CardComponent />
        </div>
      </center>
      <br />
      <br />
      <center>
        <div>{<StateExample />}</div>
      </center>
      <br />
      <br />
      <center>
        <div>
          <StringState />
        </div>
      </center>
      <center>
        <div>
          <RenderCond />
        </div>
      </center>
      <center>
        <div>
          <ColorTheory />
        </div>
      </center>
    </div>
  );
}

export default App;
