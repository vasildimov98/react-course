import { useState } from "react";

const SimpleInput = () => {
  // Name
  const [enterName, setEnterName] = useState("");
  const [enterNameTouch, setEnterNameTouch] = useState(false);
  const enterNameIsValid = enterName.trim() !== "";
  const nameInputIsInvalid = !enterNameIsValid && enterNameTouch;

  // Email
  const [enterEmail, setEnterEmail] = useState("");
  const [enteredEmailTouched, setEnterEmailTouched] = useState(false);

  const enterEmailIsValid = enterEmail.trim().includes("@");
  const emailInputIsInvalid = !enterEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enterNameIsValid && enterEmailIsValid) {
    formIsValid = true;
  }

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    setEnterNameTouch(true);
    setEnterEmailTouched(true);

    if (!formIsValid) {
      return;
    }

    console.log(enterName);

    setEnterName("");
    setEnterEmail("");
    setEnterNameTouch(false);
    setEnterEmailTouched(false);
  };

  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnterNameTouch(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnterEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnterEmailTouched(true);
  };

  const enterNameClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const enterEmailClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={enterNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enterName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Invalid Input</p>}
      </div>

      <div className={enterEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enterEmail}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && <p className="error-text">Invalid Input</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
