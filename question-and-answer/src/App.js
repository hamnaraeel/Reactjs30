import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const style = {
    border: "4px solid white",
    textAlign: "center",
    padding: "10px 50px",
    marginTop: "40px",
  };

  const content = {
    question: "What is the world's deepest lake?",
    answer: "Lake Baikal, in Russian Siberia.",
  };

  const [question, setAnswer] = useState(content.question);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of React</h1>
        <h2>Day One: Question & Answer</h2>

        <div onClick={() => setAnswer(content.answer)} style={style}>
          <p>{question}</p>
        </div>
      </header>
    </div>
  );
};

export default App;
