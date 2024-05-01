import { formatDistanceToNow } from "date-fns";
import '../styles/TaskList.css';
import Task from "./Task";

function dateFormatter(date) {
    const result = formatDistanceToNow(
        date,
        {includeSeconds: true}
    )
    return result;
}

function TaskList() {
    return (
        <>
            <ul className="todo-list">
                <li className="completed">
                    <Task description={'Completed task'} date={`created ${dateFormatter(new Date(2024, 4, 0, 13, 48, 15))} ago`} />
                </li>
                <li className="editing">
                    <Task description={'Editing task'} date={`created ${dateFormatter(new Date(2024, 4, 0, 10, 15, 0))} ago`} />
                    <input type="text" className="edit" value="Editing task" />
                </li>
                <li>
                    <Task description={'Active task'} date={`created ${dateFormatter(new Date(2024, 4, 0, 10, 15, 0))} ago`} />
                </li>
            </ul>
        </>
    )
}

export default TaskList;