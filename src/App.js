import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(false);

  return (
    <div className={`app ${selected && "backgroundImage"}`}>
      <div className="menu">
        <h1>Select Difficulty</h1>
        <h2 onClick={(e) => setSelected(false)}>Easy</h2>
        <h2 onClick={(e) => setSelected(false)}>Medium</h2>
        <h2 onClick={(e) => setSelected(false)}>Hard</h2>
        <h2
          className={selected && "selected"}
          onClick={(e) => setSelected(true)}
        >
          2020
        </h2>
      </div>
    </div>
  );
}

export default App;
