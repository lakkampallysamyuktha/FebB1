import React, { useId } from "react";

export default function UseIdHook() {

  const nameId = useId();
  const emailId = useId();

  return (
    <div className="form">

      <label htmlFor={nameId}>Name</label>
      <input type="text" id={nameId} placeholder="Enter name" />

      <label htmlFor={emailId}>Email</label>
      <input type="text" id={emailId} placeholder="Enter email" />

    </div>
  );
}