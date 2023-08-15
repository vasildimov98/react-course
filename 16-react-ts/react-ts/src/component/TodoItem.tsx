import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  title: string;
  onRemoveTodo: () => void;
}> = ({ title, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {title}
    </li>
  );
};

export default TodoItem;
