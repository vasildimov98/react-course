import Card from "../UI/Card/Card";
import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <Card className={classes.modal}>
      <h1>Delicious Food, Delivered to You</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All out meals are cooked with hight-quality ingredients, just-in-time
        and of course by experience chefs!
      </p>
    </Card>
  );
};

export default Modal;
