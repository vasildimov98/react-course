import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList";
import Image from "./components/UI/Image/Image";
import styles from "./App.module.css";
import CartForm from "./components/Cart/CartForm";
import { useContext } from "react";
import { CartContext } from "./context/cart-context";
import MealSummery from "./components/Meals/MealSummery/MealSummery";

function App() {
  const context = useContext(CartContext);

  return (
    <div className={styles.container}>
      <Header />
      <Image src="meals.jpg" alt="Table with a lot of food" />
      <MealSummery />
      <MealsList />
      {context.isCartOpen ? <CartForm /> : null}
    </div>
  );
}

export default App;
