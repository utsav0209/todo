import React from "react";

const createTodo = async (todo) => {
    const response = await fetch(`http://localhost:8080/todos`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    return await response.json()
}

const CreateTodo = ({setOpenTodos}) => {
    const [title, setTitle] = React.useState('')

    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const todo = await createTodo({title: title, status: 'OPEN'})
        setOpenTodos(openTodos => ([...openTodos, todo]))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onTitleChange}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default CreateTodo;