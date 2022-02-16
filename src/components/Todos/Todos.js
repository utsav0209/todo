import ListTodo from "./ListTodo";
import './Todos.css'
import React from "react";

const fetchTodos = async type => {
    const response = await fetch(`http://localhost:8080/todos/${type}`)
    return await response.json()
}

const Todos = ({reloadApp}) => {
    const [openTodos, setOpenTodos] = React.useState([])
    const [closedTodos, setClosedTodos] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const init = async () => {
            const openTodos = await fetchTodos('open')
            const closedTodos = await fetchTodos('closed')
            setOpenTodos(openTodos)
            setClosedTodos(closedTodos)
            setIsLoading(false)
        }
        init()
    }, [reloadApp])

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