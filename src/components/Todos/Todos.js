import ListTodo from "./ListTodo";
import './Todos.css'
import React, {useEffect} from "react";
import axios from "axios";

const Todos = () => {
    // TODO: Fetch todos from micronaut backend
    const [openTodo, setOpenTodo] = React.useState([]);
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:8080/todos/open')
            .then(response => setOpenTodo(response.data));
    }, []);

    return (
        <div className="todo-container">
            <div className="todos">
                {/*TODO: Create a new component to add new todos*/}
                <ListTodo todos={openTodo}/>
            </div>
        </div>
    )
}

export default Todos;