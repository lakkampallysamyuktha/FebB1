import React, { useState, useRef } from "react";

function AddTodo({ addTask }) {

  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  const handleAdd = () => {

    if (task.trim() === "") {
      return;
    }

    addTask(task);
    setTask("");
    inputRef.current.focus();
  };

  return (
    <div className="inputBox">

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add
      </button>

    </div>
  );
}

export default AddTodo;