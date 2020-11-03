import React from "react";

const Form = React.forwardRef(
  (
    { label, type, name, textValue, setTextValue, nextPage, prevPage, reStart },
    ref
  ) => (
    <div>
      <label>
        <h3>{label}</h3>
      </label>
      <input
        type={type}
        name={name}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        ref={ref}
      />
      <div>
        {prevPage ? <button onClick={prevPage}>Back</button> : <></>}
        {nextPage ? <button onClick={nextPage}>Next</button> : <></>}
        {reStart ? <button onClick={reStart}>Start Over</button> : <></>}
      </div>
    </div>
  )
);

export default Form;
