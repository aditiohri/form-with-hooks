import React from "react";

export default function Form2({ ref, setTextValue, textValue }) {
  return (
    <div>
      <label>
        <h3>What is your favourite animal?</h3>
      </label>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        ref={ref}
      />
    </div>
  );
}

