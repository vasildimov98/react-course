import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Button from "../../UI/Button/Button";
import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";

const HeaderCartButton = () => {
  const context = useContext(CartContext);

  return (
    <Button onClick={context.onOpenCart}>
      <FontAwesomeIcon icon={faCartShopping} />
      <p>Your Cart</p>
      <span>{context.amount}</span>
    </Button>
  );
};

export default HeaderCartButton;
