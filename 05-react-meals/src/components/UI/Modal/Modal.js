import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";

const Backdrop = () => {
  const context = useContext(CartContext);

  return <div className={classes.backdrop} onClick={context.onCloseCart} />;
};

const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

const Modal = ({ children }) => {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById("overlay"))}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
