import PropTypes from "prop-types";

import './Todo.css';
import CheckBox from "../../common/checkbox";

const TodoPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['OPEN', 'CLOSED'])
})

const Todo = ({title, status, onClick}) => {
    return (
        <div className="todo-pill">
            <span className="todo-title">
                {title}
            </span>
            <span className="todo-status">

                <CheckBox checked={status === 'OPEN'} onClick={onClick}/>
                {status}
            </span>
        </div>
    )
}

Todo.prototype = TodoPropType;

export {TodoPropType};
export default Todo;