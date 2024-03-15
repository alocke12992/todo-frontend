import { MouseEvent, useEffect, useState } from "react";
import "./App.css";

type Todo = {
  title: string;
  description: string;
  _id: string;
  completed: boolean;
};
const API_URL = import.meta.env.VITE_API_URL;
function App() {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [todos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(form);
    // await createTodo(form);
  };

  // const fetchTodos = async () => {
  //   try {
  //     const response = await fetch(`${API_URL}/todos`);
  //     const data = await response.json();
  //     setTodos(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // create a todo item
  // const createTodo = async (body) => {
  //   try {
  //     const response = await fetch(`${API_URL}/todos`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: "My new todo",
  //         description: "This is a new todo",
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     fetchTodos();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    console.log("import.meta.env.", API_URL);
  }, []);

  return (
    <div>
      <h1>My serverless todos</h1>
      <input type="text" name="title" onChange={handleChange} />
      <input type="text" name="description" onChange={handleChange} />
      <button onClick={handleSubmit}>Add todo</button>
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        ))
      ) : (
        <p>No todos found</p>
      )}
    </div>
  );
}

export default App;
