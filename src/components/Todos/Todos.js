import { useState, useEffect } from "react";
import "./Todos.css";
import ListTodo from "./ListTodo";

const Todos = () => {
  const [openTodos, setOpenTodos] = useState([]);
  const [closedTodos, setClosedTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://127.0.0.1:8080/todos/open");
      const todosData = await response.json();
      setOpenTodos(todosData);
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://127.0.0.1:8080/todos/closed");
      const todosData = await response.json();
      setClosedTodos(todosData);
    };
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <div className="todos">
        {/*TODO: Create a new component to add new todos*/}
        <ListTodo todos={openTodos} />
        <ListTodo todos={closedTodos} />
      </div>
    </div>
  );
};
export default Todos;
