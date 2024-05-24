import '../styles/TaskList.css';
import Task from "./Task";
import { useTasksListContext } from "./TaskProvider";
import { useFiltersContext } from './FilterProvider';

function TaskList() {
    const { todos, setTodos } = useTasksListContext();
    const { filterMethods, filters } = useFiltersContext();

    const filterBtn = Object.keys(filters);
    const filter = filterBtn.filter(btn => filters[btn])

    function handleDelete(index) {
        const reducedList = todos.filter(todo => todo.id !== index)
        setTodos([...reducedList]);
    }

    function handleChange(id, e) {
        const [todo] = todos.filter(todo => todo.id === id);
        todo.title = e.target.value;
        setTodos([...todos]);
    }

    function handleCheck(id, e) {
        const [todo] = todos.filter(todo => todo.id === id);
        todo.completed = e.target.checked;
        setTodos([...todos]);
    }
    
    return (
        <>
            <ul className="todo-list">
                {todos
                    .filter(filterMethods[filter])
                    .map((todo) => 
                    <Task todo={todo} key={todo.id} onDelete={handleDelete} onChange={handleChange} onChecked={handleCheck} />)
                }
            </ul>
        </>
    )
}

export default TaskList;