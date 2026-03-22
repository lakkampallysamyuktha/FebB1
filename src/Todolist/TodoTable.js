import React from "react";

function TodoTable({ tasks, deleteTask }) {
  return (
    <table>

      <thead>
        <tr>
          <th>S.No</th>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{task}</td>
            <td>
              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default TodoTable;

