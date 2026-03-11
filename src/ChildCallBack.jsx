import React from "react";

function ChildCallBack({ onclick }) {

  console.log("Child render");

  return (
    <button className="btn" onClick={onclick}>
      Click
    </button>
  );
}

export default React.memo(ChildCallBack);