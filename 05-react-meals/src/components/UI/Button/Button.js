import styles from "./Button.module.css";

const Button = ({ children, className, type, onClick, disabled }) => {
  const classes = `${styles.button} ${className || ""}`;
  const buttonType = type || "button";

  console.log("Button.js: ", disabled);
  return (
    <button
      className={classes}
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
