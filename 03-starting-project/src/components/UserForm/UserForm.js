import { useState, useRef } from "react";
import styles from "./UserForm.module.css";
import Button from "../UI/Button/Button";
import InvalidModal from "../UI/ErrorModal/ErrorModal";
import Card from "../UI/Card/Card";

const UserForm = ({ onAddingUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const okayClickedHandler = () => {
    setShowModal(false);
  };

  const submitMadeHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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

    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";

    onAddingUser(userData);
  };

  const modal = showModal ? (
    <InvalidModal text={modalText} onOkay={okayClickedHandler} />
  ) : null;

  return (
    <Card>
      <form onSubmit={submitMadeHandler} className={styles["user-form"]}>
        <div className={styles["user-form__label-container"]}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameInputRef} />
        </div>
        <div className={styles["user-form__label-container"]}>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
      {modal}
    </Card>
  );
};

export default UserForm;
