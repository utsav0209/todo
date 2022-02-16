import PropTypes from "prop-types";
import List from "../../common/list";
import Todo, {TodoPropType} from "../Todo";

const updateTodo = async (todo) => {
    const response = await fetch(`http://localhost:8080/todos`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    return await response.json()
}

const ListTodo = ({todos, toggleTodo}) => {

    const handleChange = async (todo, checked) => {
        const updatedTodo = await updateTodo({...todo, status: (checked ? 'OPEN' : 'CLOSED')})
        toggleTodo(updatedTodo)
    }

    const todolist = todos.map((todo) => <Todo key={todo.id} id={todo.id} title={todo.title} status={todo.status}
                                               onClick={(checked) => handleChange(todo, checked)}/>)
    //TODO: Filter todos based on their status in two list and show the separate groups
    return (<List items={todolist}/>)
}

ListTodo.propTypes = {
    todos: PropTypes.arrayOf(TodoPropType)
}

export default ListTodo;