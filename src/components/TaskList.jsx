import '../styles/TaskList.css';
import Task from "./Task";
import { useTasksListContext } from "./TaskProvider";

function TaskList() {
    const { todos, setTodos } = useTasksListContext();

    function handleDelete(index) {
        const reducedList = todos.filter(todo => todo.id !== index)
        setTodos(reducedList);
    }

    function handleChange(value, id) {
        const [todo] = todos.filter(todo => todo.id === id);
        todo.title = value;
        setTodos(todos);
    }

    return (
        <>
            <ul className="todo-list">
                {todos.map((todo) => 
                    <Task todo={todo} key={todo.id} onDelete={handleDelete} onChange={handleChange} />
                )}
            </ul>
        </>
    )
}

export default TaskList;