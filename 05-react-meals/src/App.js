import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList";
import Modal from "./components/Modal/Modal";
import Image from "./components/UI/Image/Image";
import styles from "./App.module.css";
import CartForm from "./components/Cart/CartForm";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Image src="meals.jpg" alt="Table with a lot of food" />
      <Modal />
      <MealsList />
      {/* <CartForm /> */}
    </div>
  );
}

export default App;
