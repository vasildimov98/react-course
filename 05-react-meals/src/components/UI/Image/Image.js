import classes from "./Image.module.css";

const Image = ({ src, alt }) => {
  return (
    <div className={classes.container}>
      <img src={src} alt={alt} className={classes.image} />
    </div>
  );
};

export default Image;
