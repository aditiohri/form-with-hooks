import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

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

export default function MultiStepForm() {
  const [textValue, setTextValue] = useState("");
  const [count, setCount] = useState(0);

  const nextPage = () => {
    setCount(count + 1);
    console.log(textValue)
  };

  const prevPage = () => {
    setCount(count - 1);
  };

  const step = (count) => {
    switch (count) {
      case 0:
        return (
          <>
            <button onClick={nextPage}>Begin</button>
          </>
        );
      case 1:
        return (
          <Form1
            ref={register}
            setTextValue={setTextValue}
            textValue={textValue}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        );
      case 2:
        return (
          <Form2
            ref={register}
            setTextValue={setTextValue}
            textValue={textValue}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        );
      case 3:
        return (
          <Form3
            ref={register}
            setTextValue={setTextValue}
            textValue={textValue}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        );
      default:
        return (
          <>
            <button onClick={nextPage}>Begin</button>
          </>
        );
    }
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div style={container}>
      <div style={card}>
        <h1>A Form For Fun</h1>
        <p>You clicked {count} times</p>
        <form onSubmit={handleSubmit(onSubmit)}>{step(count)}</form>
      </div>
    </div>
  );
}
