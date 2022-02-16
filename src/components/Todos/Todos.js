import axios from "axios";
import React from "react";

import ListTodo from "./ListTodo";
import './Todos.css'

const baseURL = 'http://localhost:8080/todos'

const Todos = () => {
    const [openTodos, setOpenTodos] = React.useState([]);
    const [closedTodos, setClosedTodos] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseURL}/open`).then((response) => {
            setOpenTodos(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get(`${baseURL}/closed`).then((response) => {
            setClosedTodos(response.data);
        });
    }, []);

    return (
        <div className="todo-container">
            <div className="todos">
                {/*TODO: Create a new component to add new todos*/}
            </div>
            <div className="todos">
                <h1>Open Todos</h1>
                <ListTodo todos={openTodos}/>
            </div>
            <div className="todos">
                <h1>Closed Todos</h1>
                <ListTodo todos={closedTodos}/>
            </div>
        </div>
    )
}

export default Todos;