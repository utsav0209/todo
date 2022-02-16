import ListTodo from "./ListTodo";
import './Todos.css'
import React, {useEffect} from "react";
import axios from "axios";

const Todos = () => {
    // TODO: Fetch todos from micronaut backend
    const [openTodo, setOpenTodo] = React.useState([]);
    const [closedTodo, setClosedTodo] = React.useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:8080/todos/open')
            .then(response => setOpenTodo(response.data));
    }, []);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:8080/todos/closed')
            .then(response => setClosedTodo(response.data));
    }, []);

    return (

        <div className="todo-container">
            <h1>OPEN TODOS</h1>
            <div className="todos">
                {/*TODO: Create a new component to add new todos*/}
                <ListTodo todos={openTodo}/>
            </div>
            <br/>
            <h1>CLOSED TODOS</h1>
            <div className="todos">
                {/*TODO: Create a new component to add new todos*/}
                <ListTodo todos={closedTodo}/>
            </div>
        </div>
    )
}

export default Todos;