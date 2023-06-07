import styles from "./MealAmount.module.css";

const MealAmount = ({ onAmountChange, amount }) => {
  const onChangeHandler = (event) => {
    onAmountChange(event.target.value);
  };
  return (
    <div className={styles.container}>
      <span>Amount</span>
      <input
        onChange={onChangeHandler}
        value={amount}
        type="number"
        min="1"
        max="5"
        defaultValue="1"
      />
    </div>
  );
};

export default MealAmount;
