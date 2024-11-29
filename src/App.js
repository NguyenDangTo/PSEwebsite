import React from "react";
import GoogleSearch from "./GoogleSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Search</h1>
      </header>
      <main>
        <GoogleSearch />
      </main>
    </div>
  );
}

export default App;
