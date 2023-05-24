import styles from "./Button.module.css";

const Button = ({ children, type, className, onClick }) => {
  const classes = `${styles.button} ${className}`;
  return (
    <button className={classes} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
