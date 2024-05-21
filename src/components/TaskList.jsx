import { useState } from "react";
import Task from "./Task";
import '../styles/TaskList.css';

function TaskList({ todos }) {
    const [todosList, setTodosList] = useState(todos);

    function handleDelete(index) {
        const reducedList = todosList.filter(todo => todo.id !== index)
        setTodosList(reducedList);
    }

    function handleChange(value, id) {
        const [todo] = todosList.filter(todo => todo.id === id);
        todo.title = value;
        setTodosList(todosList);
    }

    return (
        <>
            <ul className="todo-list">
                {todosList.map((todo) => 
                    <Task todo={todo} key={todo.id} onDelete={handleDelete} onChange={handleChange} />
                )}
            </ul>
        </>
    )
}

export default TaskList;