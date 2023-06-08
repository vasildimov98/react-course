import Button from "../../UI/Button/Button";
import styles from "./CartProduct.module.css";
import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";

const CartProduct = ({ name, price, amount, id, description }) => {
  const context = useContext(CartContext);

  const onRemoveHandler = () => {
    context.removeItem(id);
  };

  const onAddHandler = () => {
    context.addItem({ name, price, amount, id, description });
  };

  return (
    <div className={styles["cart-product"]}>
      <div className={styles["cart-product__content"]}>
        <div>
          <h3 className={styles["cart-product__title"]}>{name}</h3>
          <p className={styles["cart-product__price"]}>${price}</p>
        </div>
        <p className={styles["cart-product__number"]}>x {amount}</p>
      </div>
      <div className={styles["cart-product__buttons"]}>
        <Button
          className={styles["cart-product__button"]}
          onClick={onRemoveHandler}
        >
          -
        </Button>
        <Button
          className={styles["cart-product__button"]}
          onClick={onAddHandler}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
