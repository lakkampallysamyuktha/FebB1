import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./user.css";

export default function UserList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container">

      <h2 className="title">User List</h2>

      <div className="user-grid">
        {users.map(user => (
          <Link to={`/user/${user.id}`} className="user-card" key={user.id}>
            {user.name}
          </Link>
        ))}
      </div>

    </div>
  );
}