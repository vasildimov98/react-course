import { useContext, useState } from "react";
import Button from "../../UI/Button/Button";
import MealAmount from "../MealAmount/MealAmount";
import styles from "./Meal.module.css";
import { CartContext } from "../../../context/cart-context";

const Meal = ({ name, description, price, id }) => {
  const [amount, setAmount] = useState(1);
  const cartContext = useContext(CartContext);
  const priceString = `$${price.toFixed(2)}`;

  const onClickHandler = () => {
    cartContext.addItem({ name, description, price, amount, id });
  };

  const onAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  return (
    <div className={styles.item}>
      <li className={styles.meal}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{priceString}</p>
      </li>
      <div className={styles["adding-container"]}>
        <MealAmount onAmountChange={onAmountChange} />
        <Button onClick={onClickHandler}>+ Add</Button>
      </div>
    </div>
  );
};

export default Meal;
