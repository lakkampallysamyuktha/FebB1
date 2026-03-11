import React from "react";
import ContextFields from "./ContextFields";
import ContextBtn from "./ContextBtn";

export default function ContextForm() {
  return (
    <div className="form-card">
      <h2>Registration Form</h2>
      <ContextFields />
      <ContextBtn />
    </div>
  );
}