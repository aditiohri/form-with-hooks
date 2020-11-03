import React from "react";

export default function Review({ prevPage, reStart }) {
  return (
    <div>
      <h3>REVIEW</h3>
      <div>
        <button onClick={prevPage}>Back</button>
        <button onClick={reStart}>START OVER</button>
      </div>
    </div>
  );
}
