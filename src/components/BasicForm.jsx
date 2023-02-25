import useInput from "../hooks/useInput";
import "./form.css";

const BasicForm = (props) => {
  const [
    first,
    firstIsValid,
    firstHasError,
    handleFirstChange,
    handleFirstBlur,
    resetFirst,
  ] = useInput(validateText);

  const [
    last,
    lastIsValid,
    lastHasError,
    handleLastChange,
    handleLastBlur,
    resetLast,
  ] = useInput(validateText);

  const [
    email,
    emailIsValid,
    emailHasError,
    handleEmailChange,
    handleEmailBlur,
    resetEmail,
  ] = useInput(validateEmail);

  const formIsValid = firstIsValid && lastIsValid && emailIsValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(first, last, email);

    resetFirst();
    resetLast();
    resetEmail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="first-name">First name:</label>
          <input
            type="text"
            id="first-name"
            onChange={handleFirstChange}
            onBlur={handleFirstBlur}
            value={first}
          />
          {firstHasError && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Last name:</label>
          <input
            type="text"
            id="last-name"
            onChange={handleLastChange}
            onBlur={handleLastBlur}
            value={last}
          />
          {lastHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
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
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

function validateText(text) {
  return text.trim() !== "";
}

function validateEmail(email) {
  const emailFormat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return email.match(emailFormat);
}

export default BasicForm;
