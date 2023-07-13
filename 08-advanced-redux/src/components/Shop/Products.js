import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_CART = [
  {
    id: "c1",
    name: "First Book",
    price: 6,
    description: "This is a first book",
  },
  {
    id: "c2",
    name: "Second Book",
    price: 8,
    description: "This is a second book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_CART.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
