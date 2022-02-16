import ListTodo from "./ListTodo";
import './Todos.css'
import axios from "axios";
import {useEffect, useState} from "react";
import AddTodo from "./AddTodo/AddTodo";

const Todos = () => {
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

    const handleAddTodo = (todo) => {
        setOpenTodos([todo, ...openTodos]);
    };

    handleAddTodo.bind(this);

    return (
        <div className="todo-container">
            <AddTodo handleAddTodo={handleAddTodo} />

            {openTodos.length < 1 && <div>Loading...</div>}

            <div className="todos">
                {/*TODO: Create a new component to add new todos*/}
                <ListTodo todos={[...openTodos, ...closedTodos]}/>
            </div>
        </div>
    )
}

export default Todos;