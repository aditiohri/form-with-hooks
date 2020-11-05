import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

export default function Review({ prevPage, reStart }) {
  const { state } = useStateMachine(updateAction);
  const startOver = () => {
    updateAction(state, "", true);
    reStart();
  }
  return (
    <div>
      <h3>REVIEW</h3>
      <div>
        <p>Your favorite color: {state.form.color}</p>
        <p>Your favorite animal: {state.form.animal}</p>
        <p>Your favorite body of water: {state.form.water}</p>

        <button onClick={prevPage}>Back</button>
        <button type="reset" onClick={startOver}>
          START OVER
        </button>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}
