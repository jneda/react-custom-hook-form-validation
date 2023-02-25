import { useState } from "react";

import "./form.css";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameTouched;

  let formIsValid = false;

  if (nameIsValid) formIsValid = true;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameBlur = () => {
    setNameTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameTouched(true);

    if (!nameIsValid) {
      return;
    }

    // use form data
    console.log(name);

    setName("");
    setNameTouched(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control${nameInputIsInvalid ? " invalid" : ""}`}>
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          value={name}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
