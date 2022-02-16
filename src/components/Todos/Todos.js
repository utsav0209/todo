import ListTodo from "./ListTodo";
import './Todos.css'

const Todos = () => {
    // TODO: Fetch todos from micronaut backend
    const todos = [
        {id: 1, title: "Todo 1", status: "OPEN"},
        {id: 2, title: "Todo 2", status: "CLOSED"}
    ]

    return (
        <div className="todo-container">
            <div className="todos">
                {/*TODO: Create a new component to add new todos*/}
                <ListTodo todos={todos}/>
            </div>
        </div>
    )
}

export default Todos;