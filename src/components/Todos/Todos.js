import ListTodo from "./ListTodo";
import './Todos.css'
import axios from "axios";
import {useEffect, useState} from "react";

const Todos = () => {
    // TODO: Fetch todos from micronaut backend

    let [openTodos, setOpenTodos] = useState([]);
    let [closedTodos, setClosedTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const {data: allOpenTodos} = await axios.get("http://localhost:8080/todos/open");
            setOpenTodos(allOpenTodos);

            const {data: allClosedTodos} = await axios.get("http://localhost:8080/todos/closed");
            setClosedTodos(allClosedTodos);
        }
        fetchTodos();
    }, []);


    return (
        <div className="todo-container">
            {openTodos.length < 1 && <div>Loading...</div>}

            <div className="todos">
                {/*TODO: Create a new component to add new todos*/}
                <ListTodo todos={[...openTodos, ...closedTodos]}/>
            </div>
        </div>
    )
}

export default Todos;