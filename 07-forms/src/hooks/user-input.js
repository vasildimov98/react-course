import useState from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const isValid = isTouch && validateValue(value);
  const hasError = !isValid && isTouch;

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouch(true);
  };

  const reset = () => {
    setValue("");
    setIsTouch(false);
  };

  return {
    value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
