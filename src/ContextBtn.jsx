import React, { useContext } from "react";
import { AppContext } from "./App";

export default function ContextBtn() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}