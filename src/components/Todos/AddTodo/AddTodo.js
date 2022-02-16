import './AddTodo.css';
import {useState} from "react";
import axios from "axios";

const AddTodo = ({handleAddTodo}) => {
    const [title, setTitle] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const addTodo = async () => {
        const {data: newTodo} = await axios.post(
            "http://localhost:8080/todos",
            {
                title,
                status: "OPEN"
            }
        );
        console.log(newTodo);
        handleAddTodo(newTodo);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title);
        event.target.reset();

        addTodo();
    }

    return (
        <div className="input-group">
            <form onSubmit={handleSubmit}>
                <input name="title" required placeholder="Add a Todo" onChange={handleChange}/>
                <button className="primary">Submit</button>
            </form>
        </div>
    );
};

export default AddTodo;