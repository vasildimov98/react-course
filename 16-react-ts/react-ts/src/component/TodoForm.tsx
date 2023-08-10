import { useRef } from "react";

const TodoForm = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    console.log(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
