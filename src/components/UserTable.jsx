import React, { useState, useEffect } from "react";
import "./UserTable.css";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, [] 
// );
useEffect(() => {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, 3000);   // delay 3 seconds
}, []);

  return (
    <div className="table-wrapper">
      <h2>User Data Table</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}