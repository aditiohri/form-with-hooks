import React from "react";

export default function Form3({ ref, setTextValue, textValue, nextPage, prevPage }) {
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
        <button onClick={prevPage}>Back</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}
