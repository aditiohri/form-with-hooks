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
  const [options, setOptions] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [radioValue, setRadioValue] = useState("");

  const handleOptionAdd = () => {
    if (textValue.trim().length === 0) return;
    setTextValue("");
    setOptions([...options, { label: textValue, value: textValue }]);
  };

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
            // prop to change step value
          />
          <Form2
            ref={register}
            setTextValue={setTextValue}
          />
          <Form3
            ref={register}
            setTextValue={setTextValue}
          />

          <h3>
            <label>Name</label>
          </h3>

          <input name="firstName" ref={register} />

          <h3>
            <label>What ice cream flavors would you like?</label>
          </h3>
          <input
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <button onClick={handleOptionAdd}>Add</button>

          <div>
            {options.map((option) => (
              <div>
                <input
                  type="radio"
                  name="iceCream"
                  value={option.value}
                  checked={radioValue === option.value}
                  onChange={(e) => setRadioValue(e.target.value)}
                  ref={register}
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
