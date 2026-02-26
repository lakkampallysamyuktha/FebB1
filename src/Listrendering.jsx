import React from "react";

export default function Listrendering() {

  const users = [
    {
      id: 1,
      name: "Arjun",
      age: 25,
      city: "Chennai",
      experience: 3
    },
    {
      id: 2,
      name: "Swathi",
      age: 32,
      city: "Bangalore",
      experience: 6
    },
    {
      id: 3,
      name: "Rahul",
      age: 28,
      city: "Hyderabad",
      experience: 2
    },
    {
      id: 4,
      name: "Meena",
      age: 35,
      city: "Delhi",
      experience: 8
    },
    {
      id: 5,
      name: "Varun",
      age: 24,
      city: "Mumbai",
      experience: 1
    }
  ];

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <table
          key={user.id}
          border="1"
          style={{
            width: "300px",
            margin: "10px",
            borderCollapse: "collapse"
          }}
        >
          <tbody>
            <tr>
              <td>Name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{user.city}</td>
            </tr>
            <tr>
              <td>Experience</td>
              <td>{user.experience} years</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}