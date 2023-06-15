import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useTask from "../../hooks/use-task";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useTask();

  const enterTaskHandler = async (taskText) => {
    const transformReturnTask = (taskObj) => {
      const id = taskObj.name;
      const loadedTask = { id, text: taskText };

      props.onAddTask(loadedTask);
    };
    sendRequest(
      {
        url: "https://custom-hooks-aa5c1-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      transformReturnTask
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
