import React from "react";

export default function Form3({ ref, setTextValue, textValue }) {
  return (
    <div>
      <label>
        <h3>What is your favourite body of water?</h3>
      </label>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        ref={ref}
      />
      <div>
        <button>Next</button>
        <button>Back</button>
      </div>
    </div>
  );
}
