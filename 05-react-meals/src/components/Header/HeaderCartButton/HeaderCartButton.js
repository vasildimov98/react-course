import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <div className={classes.button}>
      <FontAwesomeIcon icon={faCartShopping} />
      <p>Your Cart</p>
      <span>2</span>
    </div>
  );
};

export default HeaderCartButton;
