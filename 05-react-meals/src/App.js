import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList";
import Image from "./components/UI/Image/Image";
import styles from "./App.module.css";
import Cart from "./components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "./context/cart-context";
import MealSummery from "./components/Meals/MealSummery/MealSummery";
import { useEffect, useState } from "react";
import useHttps from "./hooks/use-https";

function App() {
  const context = useContext(CartContext);

  const { sendRequest, isLoading, error } = useHttps();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const setMealsHandler = (data) => {
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
    };

    sendRequest(
      {
        url: "https://custom-hooks-aa5c1-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      setMealsHandler
    );
  }, [sendRequest]);

  return (
    <div className={styles.container}>
      <Header />
      <Image src="meals.jpg" alt="Table with a lot of food" />
      <MealSummery />
      <MealsList meals={meals} isLoading={isLoading} error={error} />
      {context.isCartOpen ? <Cart isCheckout={false} /> : null}
      {context.isCheckingOut ? <Cart isCheckout={true} /> : null}
    </div>
  );
}

export default App;
