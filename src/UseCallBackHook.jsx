import React, { useState, useCallback } from "react";
import ChildCallBack from "./ChildCallBack";

export default function UseCallBackHook() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Hello everyone");
  }, []);

  return (
    <div className="card">

      <h2>Button</h2>

      <h3>{count}</h3>

      <div className="btn-group">

        <ChildCallBack onclick={handleClick} />

        <button
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

      </div>

    </div>
  );
}