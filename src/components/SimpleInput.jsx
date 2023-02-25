import { useState } from "react";

import "./form.css";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameTouched;

  const emailFormat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const emailIsValid = email.trim() !== "" && email.match(emailFormat);
  const emailInputIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) formIsValid = true;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameBlur = () => {
    setNameTouched(true);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    // use form data
    console.log(name, email);

    setName("");
    setNameTouched(false);
    setEmail("");
    setEmailTouched(false);
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
      <div className={`form-control${emailInputIsInvalid ? " invalid" : ""}`}>
        <label htmlFor="email">Your email:</label>
        <input
          type="email"
          id="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={email}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must be a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
