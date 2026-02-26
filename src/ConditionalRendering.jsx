import React from "react";

export default function ConditionalRendering() {

  const name = "abhinav";
  const age = 23;
  const email = "abhinav@gmail.com";
  const city = "Bangalore";
  const qualification = "B.Tech";
  const experience = 2; // change this to 0 and see difference

  return (
    <div>
      <h2>Employee Details</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>City: {city}</p>
      <p>Qualification: {qualification}</p>

      {/* Conditional Rendering */}
      {experience > 0 ? (
        <p>Experience: {experience} Years</p>
      ) : (
        <p>Fresher</p>
      )}

    </div>
  );
}