import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./CartForm.module.css";
import CartProduct from "./CartProduct/CartProduct";

const CartForm = () => {
  return (
    <>
      <div className={styles["cart-form__overlay"]} />
      <Card className={styles["cart-form"]}>
        <form>
          <CartProduct />
          <CartProduct />
          <div className={styles["cart-form__amount"]}>
            <h2>Total Amount</h2>
            <p className={styles["cart-form__price"]}>$33.00</p>
          </div>
          <div className={styles["cart-form__actions"]}>
            <Button>Cancel</Button>
            <Button type="submit">Order</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default CartForm;
