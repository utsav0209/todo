import React from "react";
import axios from "axios";

const baseURL = 'http://localhost:8080/todos'

function TodoForm() {
    const [todo, setTodo] = React.useState("")

    function handleSubmit(event) {
        axios.post(baseURL, {
                title: todo,
                status: "OPEN"
            })
            .then((response) => {
                window.location.reload();
            });
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="todo"
                className="input"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <input type="submit" value="Submit" />
        </form>
    );
}


export default TodoForm;