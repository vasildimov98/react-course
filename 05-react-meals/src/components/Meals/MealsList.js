import Card from "../UI/Card/Card";
import Meal from "./Meal/Meal";
import styles from "./MealsList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsList = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <Meal key={meal.id} {...meal} />);

  return (
    <Card className={styles.meals}>
      <ul className={styles.list}>{mealsList}</ul>
    </Card>
  );
};

export default MealsList;
