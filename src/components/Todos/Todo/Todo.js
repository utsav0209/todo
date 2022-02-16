import PropTypes from "prop-types";

import './Todo.css';

const TodoPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['OPEN', 'CLOSED'])
})

const Todo = ({title, status}) => {
    return (
        <div className="todo-pill">
            <span className="todo-title">
                {title}
            </span>
            <span className="todo-status">
                {/*TODO: Create a re-usable checkbox here to indicate status*/}
                {/*TODO: The checkbox should be able to change the status of the todo*/}
                {status}
            </span>
        </div>
    )
}

Todo.prototype = TodoPropType;

export { TodoPropType };
export default Todo;