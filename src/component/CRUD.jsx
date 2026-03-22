import React, { useState, useEffect } from "react";
import "./CRUD.css";

export default function CRUD() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "https://jsonplaceholder.typicode.com/users";

  // 🔹 READ
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  // 🔹 CREATE
  const addItem = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) return;

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail
      })
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = { ...data, id: user.length + 1 };
        setUser([...user, newUser]);
        setName("");
        setEmail("");
      });
  };

  // 🔹 DELETE
  const handleDelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE"
    }).then(() => {
      setUser(user.filter((u) => u.id !== id));
    });
  };

  // 🔹 EDIT
  const handleEdit = (u) => {
    setName(u.name);
    setEmail(u.email);
    setEditId(u.id);
  };

  // 🔹 UPDATE
  const handleUpdate = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) return;

    fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail
      })
    }).then(() => {
      setUser(
        user.map((u) =>
          u.id === editId
            ? { ...u, name: trimmedName, email: trimmedEmail }
            : u
        )
      );

      setName("");
      setEmail("");
      setEditId(null);
    });
  };

  return (
    <div className="container">
      <h1>User Details</h1>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {user.map((u, index) => (
            <tr key={u.id}>
              <td>{index + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(u)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* 🔥 INPUT ROW AT BOTTOM */}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              {editId ? (
                <button className="update-btn" onClick={handleUpdate}>
                  Update
                </button>
              ) : (
                <button className="add-btn" onClick={addItem}>
                  Add
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}