import React, { useState, useCallback } from "react";
import CallbackChild from "./CallbackChild";

export default function CallbackHook() {

  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const getNumbers = useCallback(() => {
    return [number, number + 1, number + 2, number + 3];
  }, [number]);

  const themeStyle = {
    backgroundColor: darkTheme ? "#070c0e" : "#f5f5f5",
    color: darkTheme ? "#fff" : "#2675dc",
    padding: "15px",
    borderRadius: "8px"
  };

  return (
    <div style={themeStyle}>

      <h3>Theme toggle</h3>

      <input
        className="input"
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button
        className="btn"
        onClick={() => setDarkTheme(!darkTheme)}
      >
         {darkTheme ? "Light Theme" : "Dark Theme"}
      </button>

      <CallbackChild getNumbers={getNumbers} />

    </div>
  );
}