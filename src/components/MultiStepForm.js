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
    console.log(count);
  };
  
  const prevPage = () => {
    setCount(count - 1);
    console.log(count);
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div style={container}>
      <div style={card}>
        <h1>A Form For Fun</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form1
            ref={register}
            setTextValue={setTextValue}
            textValue={textValue}
            />
          <Form2
            ref={register}
            setTextValue={setTextValue}
            textValue={textValue}
            nextPage={nextPage}
            prevPage={prevPage}
            />
          <Form3
            ref={register}
            setTextValue={setTextValue}
            textValue={textValue}
            // prop to change step value
          />
          </form>
          </div>
    </div>
  );
}
