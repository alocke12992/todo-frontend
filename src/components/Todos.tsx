import { FC } from "react";
import { Todo } from "../types";
type Props = {
  todos: Todo[];
};

const Todos: FC<Props> = ({ todos }) => {
  if (!todos.length) {
    return <p>No todos found</p>;
  }

  return (
    <div className="flex">
      {todos.map((todo) => (
        <div className="card" key={todo._id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
