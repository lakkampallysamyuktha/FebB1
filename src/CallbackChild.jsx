import React, { useState, useEffect } from "react";

export default function CallbackChild({ getNumbers }) {

  const [numbers, setNumbers] = useState([]);

  useEffect(() => {

    console.log("Updating numbers");

    setNumbers(getNumbers());

  }, [getNumbers]);

  return (
    <div className="items">

      {numbers.map((num) => (
        <div key={num} className="item">
          {num}
        </div>
      ))}

    </div>
  );
}