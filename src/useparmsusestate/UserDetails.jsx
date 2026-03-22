import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./user.css";

export default function UserDetails() {

  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  return (
    <div className="container">

      <h2 className="title">User Details</h2>

      <div className="details-card">

        <p><b>Name:</b> {user.name}</p>
        <p><b>Username:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>

        <p><b>Company:</b> {user.company?.name}</p>

        <p><b>Street:</b> {user.address?.street}</p>
        <p><b>City:</b> {user.address?.city}</p>
        <p><b>Zipcode:</b> {user.address?.zipcode}</p>

        <p><b>Latitude:</b> {user.address?.geo?.lat}</p>
        <p><b>Longitude:</b> {user.address?.geo?.lng}</p>

      </div>

    </div>
  );
}