import styles from "./MealAmount.module.css";

const MealAmount = ({ onAmountChange }) => {
  const onChangeHandler = (event) => {
    onAmountChange(event.target.value);
  };
  return (
    <div className={styles.container}>
      <span>Amount</span>
      <input
        onChange={onChangeHandler}
        type="number"
        min="1"
        max="5"
        defaultValue="1"
      />
    </div>
  );
};

export default MealAmount;
