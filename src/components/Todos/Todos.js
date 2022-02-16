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

    const updateTodo = (updatedTodo) => {

        if (updatedTodo.status === "OPEN") {
            removeFromClosedTodos(updatedTodo.id);
            setOpenTodos([updatedTodo, ...openTodos]);
        } else {
            removeFromOpenTodos(updatedTodo.id);
            setClosedTodos([updatedTodo, ...closedTodos]);
        }
    };

    const removeFromOpenTodos = (id) => {
        setOpenTodos(openTodos.filter(todo => todo.id !== id));
    };

    const removeFromClosedTodos = (id) => {
        setClosedTodos(closedTodos.filter(todo => todo.id !== id));
    }


    return (
        <div className="todo-container">
            <AddTodo handleAddTodo={handleAddTodo}/>

            {(openTodos.length + closedTodos.length) < 1 && <div>Loading...</div>}

            <div className="todos">
                <ListTodo todos={[...openTodos, ...closedTodos]} updateTodo={updateTodo}/>
            </div>
        </div>
    )
}

export default Todos;