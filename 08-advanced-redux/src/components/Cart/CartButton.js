import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(uiActions.toggle());
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
