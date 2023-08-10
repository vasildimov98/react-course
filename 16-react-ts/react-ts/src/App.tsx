import ToDos from "./component/ToDo";
import Todo from "./models/todo";

function App() {
  const todoItems = [
    new Todo("Learn React"),
    new Todo("React Advanced Course"),
  ];

  return (
    <div>
      <ToDos items={todoItems} />
    </div>
  );
}

export default App;
