import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

const InvalidModal = ({ text, onOkay }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onOkay}></div>
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
    </div>
  );
};

export default InvalidModal;
