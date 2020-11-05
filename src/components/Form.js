import React from "react";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import updateAction from "./updateAction";

const Form = ({
  label,
  type,
  name,
  textValue,
  setTextValue,
  nextPage,
  prevPage,
  reStart,
}) => {

  const { state, action } = useStateMachine(updateAction);

  const { register, handleSubmit } = useForm({
    defaultValues: state.form,
  });

  const onSubmit = (data) => {
    action(data);
    console.log(data);
    nextPage();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <h3>{label}</h3>
        </label>
        <input
          type={type}
          name={name}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          ref={register}
        />
        <div>
          {prevPage ? <button onClick={prevPage}>Back</button> : <></>}
          {nextPage ? <button type="submit">Next</button> : <></>}
          {reStart ? <button onClick={reStart}>Start Over</button> : <></>}
        </div>
      </div>
    </form>
  );
};

export default Form;
