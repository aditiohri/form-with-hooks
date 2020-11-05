import React, { useState } from "react";
import {
  StateMachineProvider,
  createStore,
} from "little-state-machine";

import Form from "./Form";
import Review from "./Review";

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const card = {
  border: "2px dotted green",
  alignSelf: "center",
  padding: "1em",
};

createStore({
  form: {
    color: "",
    animal: "",
    water: "",
  },
});


export default function MultiStepForm() {
  const [textValue, setTextValue] = useState("");
  const [count, setCount] = useState(0);

  const nextPage = () => {
    setCount(count + 1);
  };

  const prevPage = () => {
    setCount(count - 1);
  };

  const reStart = () => {
    setCount(0);
  };

  return (
    <StateMachineProvider>
      <div style={container}>
        <div style={card}>
          <h1>A Form For Fun</h1>
          <p>You clicked {count} times</p>
          {count === 0 && (
            <>
              <button onClick={nextPage}>Begin</button>
            </>
          )}
          {count === 1 && (
            <Form
              label="What is your favorite color?"
              type="text"
              name="color"
              setTextValue={setTextValue}
              textValue={textValue}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          )}
          {count === 2 && (
            <Form
              label="What is your favorite animal?"
              type="text"
              name="animal"
              textValue={textValue}
              setTextValue={setTextValue}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          )}
          {count === 3 && (
            <Form
              label="What is your favorite body of water?"
              type="text"
              name="water"
              setTextValue={setTextValue}
              textValue={textValue}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          )}
          {count === 4 && <Review prevPage={prevPage} reStart={reStart} />}
        </div>
      </div>
    </StateMachineProvider>
  );
}
