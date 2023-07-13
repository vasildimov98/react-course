import { useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./Checkout.module.css";

const Checkout = ({ cancelHandler, checkoutHandler }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [firstNameIsTouch, setFirstNameIsTouch] = useState(false);
  const [lastNameIsTouch, setLastNameIsTouch] = useState(false);
  const [emailAddressIsTouch, setEmailAddressIsTouch] = useState(false);

  const firstNameIsValid = firstName.trim() !== "";
  const lastNameIsValid = lastName.trim() !== "";
  const emailAddressIsValid =
    emailAddress.trim() !== "" && emailAddress.includes("@");

  const isFormValid =
    firstNameIsValid && lastNameIsValid && emailAddressIsValid;

  console.log(isFormValid);

  const onFirstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const onEmailAddressChangeHandler = (event) => {
    setEmailAddress(event.target.value);
  };

  const onBlurFirstNameHandler = () => {
    setFirstNameIsTouch(true);
  };

  const onBlurLastNameHandler = () => {
    setLastNameIsTouch(true);
  };

  const onBlurEmailAddressHandler = (event) => {
    setEmailAddressIsTouch(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const customerData = {
      firstName,
      lastName,
      emailAddress,
    };

    checkoutHandler(customerData);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="first-name">First Name</label>
        <input
          className={classes["checkout-input"]}
          type="text"
          id="first-name"
          placeholder="First Name"
          onBlur={onBlurFirstNameHandler}
          onChange={onFirstNameChangeHandler}
          value={firstName}
        />
        {!firstNameIsValid && firstNameIsTouch && (
          <p className={classes["invalid-message"]}>
            Please enter a valid first name.
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="last-name">Last Name</label>
        <input
          className={classes["checkout-input"]}
          type="text"
          id="last-name"
          placeholder="Last Name"
          onBlur={onBlurLastNameHandler}
          onChange={onLastNameChangeHandler}
          value={lastName}
        />
        {!lastNameIsValid && lastNameIsTouch && (
          <p className={classes["invalid-message"]}>
            Please enter a valid last name.
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          className={classes["checkout-input"]}
          type="email"
          id="email"
          placeholder="Email"
          onBlur={onBlurEmailAddressHandler}
          onChange={onEmailAddressChangeHandler}
          value={emailAddress}
        />
        {!emailAddressIsValid && emailAddressIsTouch && (
          <p className={classes["invalid-message"]}>
            Please enter a valid email address.
          </p>
        )}
      </div>

      <div className={classes["checkout-action"]}>
        <Button onClick={cancelHandler}>Cancel</Button>
        <Button disabled={!isFormValid} type="submit">
          Checkout
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
