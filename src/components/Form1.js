import React from "react";

export default function Form1({ ref, setTextValue, textValue, count, changeCount }) {
  return (
    <div>
      <label>
        <h3>What is your favourite color?</h3>
      </label>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        ref={ref}
      />
      <div>
          <button onClick={changeCount}>Next</button>
      </div>
    </div>
  );
}
