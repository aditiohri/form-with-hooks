import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Form from './Form'
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
          <Form
            label="What is your favorite color?"
            type="text"
            name="color"
            setTextValue={setTextValue}
            textValue={textValue}
            nextPage={nextPage}
            prevPage={prevPage}
            ref={register}
          />
        );
      case 2:
        return (
          <Form
          label="What is your favorite animal?"
          type="text"
          name="animal"
          textValue={textValue}
          setTextValue={setTextValue}
          nextPage={nextPage}
          prevPage={prevPage}
          ref={register}
          />
        );
      case 3:
        return (
          <Form
          label="What is your favorite body of water?"
          type="text"
          name="water"
          setTextValue={setTextValue}
          textValue={textValue}
          nextPage={nextPage}
          prevPage={prevPage}
          ref={register}
          />
        );
      case 4:
        return <Review prevPage={prevPage} reStart={reStart} />;
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
