import classes from "./Input.module.css";

const Input = ({ label, input, onChange }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={input.id} className={classes.label}>
        {label}
      </label>
      <input id={input.id} {...input} onChange={onChange} />
    </div>
  );
};

export default Input;
