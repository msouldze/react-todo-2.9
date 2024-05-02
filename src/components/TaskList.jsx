import { useState } from "react";
import { useTasksListContext } from "./TaskProvider";
import Task from "./Task";
import '../styles/TaskList.css';

function TaskList() {

    const { tasks } = useTasksListContext();
    const [tasksList, setTasksList] = useState(tasks);

    function handleDelete(index) {
        const reducedList = tasksList.filter(task => task.id !== index)
        setTasksList(reducedList);
    }

    function handleChange(value, id) {
        const [task] = tasksList.filter(task => task.id === id);
        task.title = value;
        setTasksList(tasksList);
    }

    return (
        <>
            <ul className="todo-list">
                {tasksList.map((task) => 
                    <Task task={task} key={task.id} onDelete={handleDelete} onChange={handleChange} />
                )}
            </ul>
        </>
    )
}

export default TaskList;