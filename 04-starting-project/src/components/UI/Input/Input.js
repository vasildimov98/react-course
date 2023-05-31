import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(
  ({ onInputChange, onInputBlur, type, id, name, value, isValid }, ref) => {
    const inputRef = useRef();

    const inputChangeHandler = (event) => {
      onInputChange(event.target.value);
    };

    const inputBlurHandler = () => {
      onInputBlur();
    };

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }));

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{name}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
      </div>
    );
  }
);

export default Input;
