import { useState } from "react";
import { FormState, Todo } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

const useTodos = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      setIsFetching(true);
      const response = await fetch(`${API_URL}/todos`);
      const { data } = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
    setIsFetching(false);
  };

  // create a todo item
  const createTodo = async (body: FormState) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const { data } = await response.json();
      setTodos([...todos, data]);
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return { isFetching, isSubmitting, todos, fetchTodos, createTodo };
};

export default useTodos;
