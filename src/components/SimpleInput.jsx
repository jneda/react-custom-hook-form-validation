import useInput from "../hooks/useInput";

import "./form.css";

const SimpleInput = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
    reset: resetName,
  } = useInput((name) => name !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    reset: resetEmail,
  } = useInput((email) => {
    const emailFormat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return email.match(emailFormat);
  });

  let formIsValid = false;

  if (nameIsValid && emailIsValid) formIsValid = true;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameHasError || emailHasError) {
      return;
    }

    // use form data
    console.log(name, email);

    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control${nameHasError ? " invalid" : ""}`}>
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          value={name}
        />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={`form-control${emailHasError ? " invalid" : ""}`}>
        <label htmlFor="email">Your email:</label>
        <input
          type="email"
          id="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={email}
        />
        {emailHasError && (
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
