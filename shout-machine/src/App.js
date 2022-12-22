import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [variable, setVariable] = useState();

  const output = {
    textAlign: "center",
    color: "pink",
    fontSize: "100px",
    marginTop: "-20px",
    padding: "10px",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>30 days of React</h4>
        <h5 style={{ marginTop: "-30px" }}>Day Two: Shout Machine</h5>

        <div>
          <input
            style={{ fontSize: "24px" }}
            value={variable}
            onChange={(e) => {
              setVariable(e.target.value);
            }}
          />
          <h1 style={output}>{variable}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
