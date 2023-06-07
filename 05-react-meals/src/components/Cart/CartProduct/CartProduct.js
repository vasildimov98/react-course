import Button from "../../UI/Button/Button";
import styles from "./CartProduct.module.css";

const CartProduct = () => {
  return (
    <div className={styles["cart-product"]}>
      <div className={styles["cart-product__content"]}>
        <div>
          <h3 className={styles["cart-product__title"]}>Sushi</h3>
          <p className={styles["cart-product__price"]}>$16.5</p>
        </div>
        <p className={styles["cart-product__number"]}>x 1</p>
      </div>
      <div className={styles["cart-product__buttons"]}>
        <Button className={styles["cart-product__button"]}>-</Button>
        <Button className={styles["cart-product__button"]}>+</Button>
      </div>
    </div>
  );
};

export default CartProduct;
