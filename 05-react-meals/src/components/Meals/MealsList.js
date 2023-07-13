import Card from "../UI/Card/Card";
import Meal from "./Meal/Meal";
import styles from "./MealsList.module.css";

const MealsList = ({ meals, isLoading, error }) => {
  let content = <p>Loading...</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (!error && !isLoading && meals.length > 0) {
    content = meals.map((meal) => <Meal key={meal.id} {...meal} />);
  }

  return (
    <Card className={styles.meals}>
      <ul className={styles.list}>{content}</ul>
    </Card>
  );
};

export default MealsList;
