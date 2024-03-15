import { useEffect } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Form from "./components/Form";
import useTodos from "./hooks/useTodos";
import { RingLoader } from "react-spinners";

function App() {
  const { isFetching, isSubmitting, todos, fetchTodos, createTodo } =
    useTodos();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>My serverless todos</h1>
      <Form submit={createTodo} loading={isSubmitting} />
      <div className="flex">
        {isFetching ? <RingLoader /> : <Todos todos={todos} />}
      </div>
    </div>
  );
}

export default App;
