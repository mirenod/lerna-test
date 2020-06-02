import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { add } from "@peanut/common";
import { Button } from "@namespace/components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {add(1, 1)}
        </a>
        <Button/>
      </header>
    </div>
  );
}

export default App;
