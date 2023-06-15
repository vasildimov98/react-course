import Input from "../../UI/Input/Input";
import styles from "./MealAmount.module.css";

const MealAmount = ({ onAmountChange, id }) => {
  const onChangeHandler = (event) => {
    onAmountChange(event.target.value);
  };
  return (
    <div className={styles.container}>
      <Input
        onChange={onChangeHandler}
        label={"Amount"}
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
    </div>
  );
};

export default MealAmount;
