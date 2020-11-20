import React from "react";
import Landing from "../src/components/pages/Landing";
import ThemeToggler from "../src/components/ThemeToggler";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeToggler />
        <Landing />
      </header>
    </div>
  );
}

export default App;
