import PropTypes from "prop-types";

import './Todo.css';
import Checkbox from "../../common/Checkbox/TodoCheckbox";
import axios from "axios";
import todo from "./index";

const TodoPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['OPEN', 'CLOSED'])
})

const Todo = ({id, title, status, updateTodo}) => {
    const toggleStatus = async (id) => {
        const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
        const {data: updatedTodo} = await axios.patch(
            "http://localhost:8080/todos",
            {
                id,
                title,
                status: newStatus
            }
        );

        updateTodo(updatedTodo);
    };

    return (
        <div className="todo-pill">
            <span className="todo-title">
                {title}
            </span>
            <span className="todo-status">
                <Checkbox status={status} handleChange={() => toggleStatus(id)} />
            </span>
        </div>
    )
}

Todo.prototype = TodoPropType;

export {TodoPropType};
export default Todo;