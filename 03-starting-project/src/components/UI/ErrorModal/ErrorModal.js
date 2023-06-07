import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";
import { createPortal } from "react-dom";

const Backdrop = ({ onOkay }) => {
  return <div className={styles.backdrop} onClick={onOkay}></div>;
};

const ModalOverlay = ({ text, onOkay }) => {
  return (
    <Card className={styles.modal}>
      <div className={styles["modal__header"]}>
        <h2>Invalid Input</h2>
      </div>
      <div className={styles["modal__content"]}>
        <p>{text}</p>
      </div>
      <footer className={styles["modal__footer"]}>
        <Button onClick={onOkay}>Okay</Button>
      </footer>
    </Card>
  );
};

const InvalidModal = ({ text, onOkay }) => {
  return (
    <>
      {createPortal(
        <Backdrop onOkay={onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay text={text} onOkay={onOkay} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default InvalidModal;
