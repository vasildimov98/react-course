import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Button from "../../UI/Button/Button";

const HeaderCartButton = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={faCartShopping} />
      <p>Your Cart</p>
      <span>2</span>
    </Button>
  );
};

export default HeaderCartButton;
