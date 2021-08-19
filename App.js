import React, { useState } from "react";
const colors = ["red", "green", "blue", "yellow"];
export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
return (
    <div
      className="App"
      style={{
        backgroundColor
      }}
    >
      <style>
        {`
        .circle {
          border-radius: 50%;
          width: 50px;
          height: 50px;
          border: 1px solid black;
          display: inline-block;
          cursor: pointer;
        }
#screen {
          width: 100vw;
          height: 100vh;
        }
      `}
      </style>
      {colors.map((c) => {
        return (
          <div
            key={c}
            style={{
              backgroundColor: c
            }}
            class="circle"
            onClick={() => setBackgroundColor(c)}
          ></div>
        );
      })}
    </div>
  );
}