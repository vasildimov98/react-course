import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const ToDos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} title={item.title} />
      ))}
    </ul>
  );
};

export default ToDos;
