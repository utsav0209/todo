import "./AddTodo.css";
import { useState } from "react";
import axios from "axios";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const handleText = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8080/todos", {
        title: title,
        status: "OPEN",
      })
      .then((newTodo) => console.log("New Todo Inserted: ", newTodo));
  };

  return (
    <div>
      <center>
        <br />
        <input
          type="text"
          value={title}
          className="form-control"
          onChange={handleText}
        />
        <button type="submit" className="btn" onClick={handleClick}>
          Add
        </button>
      </center>
    </div>
  );
};

export default AddTodo;
