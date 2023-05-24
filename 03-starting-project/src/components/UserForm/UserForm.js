import { useState } from "react";
import styles from "./UserForm.module.css";
import Button from "../UI/Button/Button";
import InvalidModal from "../UI/ErrorModal/ErrorModal";
import Card from "../UI/Card/Card";

const UserForm = ({ onAddingUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const okayClickedHandler = () => {
    setShowModal(false);
  };

  const submitMadeHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setShowModal(true);
      setModalText("Please enter a valid input (non-empty value).");
      return;
    }

    if (+enteredAge < 0) {
      setShowModal(true);
      setModalText("Please enter a valid age (> 0).");
      return;
    }

    const userData = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: enteredAge,
    };

    setEnteredUsername("");
    setEnteredAge("");

    onAddingUser(userData);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const modal = showModal ? (
    <InvalidModal text={modalText} onOkay={okayClickedHandler} />
  ) : null;

  return (
    <Card>
      <form onSubmit={submitMadeHandler} className={styles["user-form"]}>
        <div className={styles["user-form__label-container"]}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={styles["user-form__label-container"]}>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={enteredAge}
            type="number"
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
      {modal}
    </Card>
  );
};

export default UserForm;
