import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./CartForm.module.css";
import CartProduct from "./CartProduct/CartProduct";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const CartForm = () => {
  const context = useContext(CartContext);

  const cardProducts = context.items.map((item) => (
    <CartProduct key={item.id} {...item} />
  ));
  const totalAmount = context.totalAmount.toFixed(2);

  const onSubmitHandler = () => {
    context.onCloseCart();
    context.clearCart();
    console.log("Ordering...");
  };

  return (
    <>
      <div
        className={styles["cart-form__overlay"]}
        onClick={context.onCloseCart}
      />
      <Card className={styles["cart-form"]}>
        <div>
          {cardProducts}
          <div className={styles["cart-form__amount"]}>
            <h2>Total Amount</h2>
            <p className={styles["cart-form__price"]}>${totalAmount}</p>
          </div>
          <div className={styles["cart-form__actions"]}>
            <Button onClick={context.onCloseCart}>Cancel</Button>
            <Button
              type="submit"
              disabled={context.items.length === 0}
              onClick={onSubmitHandler}
            >
              Order
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CartForm;
