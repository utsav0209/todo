import PropTypes from "prop-types";
import axios from "axios";

import "./Todo.css";

const TodoPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["OPEN", "CLOSED"]),
});

const Todo = ({ id, title, status }) => {
  const markAsDone = async (event) => {
    console.log("aa");
    event.preventDefault();
    await axios
      .post(`http://localhost:8080/todos/${id}`, {
        status: "CLOSED",
      })
      .then((newTodo) => console.log("Todo Marked as Done: ", newTodo));
  };

  return (
    <div className="todo-pill">
      <input
        type="checkbox"
        checked={status === "CLOSED"}
        onChange={markAsDone}
        id={id}
      />
      <span className="todo-title">{title}</span>
      <span className="todo-status">
        {/*TODO: Create a re-usable checkbox here to indicate status*/}
        {/*TODO: The checkbox should be able to change the status of the todo*/}
        {status}
      </span>
    </div>
  );
};

export { TodoPropType };
export default Todo;
