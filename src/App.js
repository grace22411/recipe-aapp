import React from "react";
import { Header } from "../src/components/Header";
import { Slider } from "../src/components/Slider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Slider />
      </header>
    </div>
  );
}

export default App;
