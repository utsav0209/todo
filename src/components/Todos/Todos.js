import ListTodo from "./ListTodo";
import './Todos.css'
import React from "react";

const fetchOpenTodos = async () => {
    const response = await fetch('http://localhost:8080/todos/open')
    return await response.json()
}

const fetchClosedTodos = async () => {
    const response = await fetch('http://localhost:8080/todos/closed')
    return await response.json()
}

const Todos = () => {

    const [openTodos, setOpenTodos] = React.useState([])
    const [closedTodos, setClosedTodos] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    // const [state, setState] = React.useState({
    //     todos: {
    //         open: {},
    //         closed: {}
    //     },
    //     isLoading: true
    // })

    React.useEffect(() => {
        const init = async () => {
            const openTodos = await fetchOpenTodos()
            const closedTodos = await fetchClosedTodos()
            setOpenTodos(openTodos)
            setClosedTodos(closedTodos)
            setIsLoading(false)
        }
        init()
    }, [])

    // TODO: Fetch todos from micronaut backend
    // const todos = [
    //     {id: 1, title: "Todo 1", status: "OPEN"},
    //     {id: 2, title: "Todo 2", status: "CLOSED"}
    // ]

    if (isLoading)
        return (<div>Loading...</div>)

    return (
        <div className="todo-container">
            <div className="todos">
                {/*TODO: Create a new component to add new todos*/}
                <ListTodo todos={openTodos}/>
                <ListTodo todos={closedTodos}/>
            </div>
        </div>
    )
}

export default Todos;