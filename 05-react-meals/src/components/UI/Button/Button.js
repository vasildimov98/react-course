import styles from "./Button.module.css";

const Button = ({ children, className, type, onClick }) => {
  const classes = `${styles.button} ${className || ""}`;
  const buttonType = type || "button";
  return (
    <button className={classes} type={buttonType} onClick={onClick || ""}>
      {children}
    </button>
  );
};

export default Button;
