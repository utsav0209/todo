import PropTypes from "prop-types";
import List from "../../common/list";
import Todo, {TodoPropType} from "../Todo";

const ListTodo = ({todos, updateTodo}) => {
    const todolist = todos.map(
        (todo) => <Todo
            updateTodo={updateTodo}
            key={todo.id}
            id={todo.id}
            title={todo.title}
            status={todo.status}/>
    );

    return (<List items={todolist}/>)
}

ListTodo.propTypes = {
    todos: PropTypes.arrayOf(TodoPropType)
}

export default ListTodo;