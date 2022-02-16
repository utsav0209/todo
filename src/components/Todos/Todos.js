import ListTodo from "./ListTodo";
import './Todos.css'
import React from "react";
import CreateTodo from "./CreateTodo";

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

    const toggleTodo = (todo) => {
        if (todo.status === 'CLOSED') {
            const openTodosClone = [...openTodos]
            const filteredOpenTodos = openTodosClone.filter(t => t.id !== todo.id)
            console.log(filteredOpenTodos)
            setOpenTodos(filteredOpenTodos)
            setClosedTodos([...closedTodos, todo])
        } else if (todo.status === 'OPEN'){
            const closedTodosClone = [...closedTodos]
            const filteredClosedTodos = closedTodosClone.filter(t => t.id !== todo.id)
            setClosedTodos(filteredClosedTodos)
            setOpenTodos([...openTodos, todo])
        }
    }

    if (isLoading)
        return (<div>Loading...</div>)

    return (
        <div className="todo-container">
            <div className="todos">
                <CreateTodo setOpenTodos={setOpenTodos} />
                <ListTodo toggleTodo={toggleTodo} todos={openTodos}/>
                <ListTodo toggleTodo={toggleTodo} todos={closedTodos}/>
            </div>
        </div>
    )
}

export default Todos;