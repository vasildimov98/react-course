import Button from "../UI/Button/Button";
import styles from "./Cart.module.css";
import CartProduct from "./CartProduct/CartProduct";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import Modal from "../UI/Modal/Modal";
import Checkout from "./Checkout/Checkout";

const Cart = ({ isCheckout }) => {
  const context = useContext(CartContext);

  const totalAmount = context.totalAmount.toFixed(2);

  const onOrderHandler = () => {
    context.onCheckingOut();
    context.onCloseCart();
  };

  const onCheckoutHandler = (customerData) => {
    const order = {
      customer: customerData,
      items: context.items,
    };

    fetch(
      "https://custom-hooks-aa5c1-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify(order),
      }
    );

    context.clearCart();
    context.onCloseCheckout();
  };

  if (isCheckout) {
    return (
      <Modal>
        <div className={styles["cart-form__amount"]}>
          <h2>Total Amount</h2>
          <p className={styles["cart-form__price"]}>${totalAmount}</p>
        </div>
        <Checkout
          cancelHandler={context.onCloseCart}
          checkoutHandler={onCheckoutHandler}
        ></Checkout>
      </Modal>
    );
  }

  const cardProducts = context.items.map((item) => (
    <CartProduct key={item.id} {...item} />
  ));

  return (
    <Modal>
      <div>
        {cardProducts}
        <div className={styles["cart-form__amount"]}>
          <h2>Total Amount</h2>
          <p className={styles["cart-form__price"]}>${totalAmount}</p>
        </div>
        <div className={styles["cart-form__actions"]}>
          <Button onClick={context.onCloseCart}>Cancel</Button>
          {context.items.length > 0 && (
            <Button onClick={onOrderHandler}>Order</Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
