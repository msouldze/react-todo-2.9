import '../styles/Footer.css'
import { useState } from 'react';
import TasksFilter from "./TasksFilter"
import { useTasksListContext } from "./TaskProvider";

export default function Footer() {
    const { todos, setTodos } = useTasksListContext();
    // const [todosList, setTodosList] = useState(todos);
    const activeTodos = todos.filter(todo => !todo.completed);

    function handleFilter(event) {
        if(event.target.innerText === 'All') {
            setTodos([...todos]);
        } else if(event.target.innerText === 'Active') {
            setTodos([...activeTodos]);
        } else if(event.target.innerText === 'Completed') {
            const completedTodos = todos.filter(todo => todo.completed);
            setTodos([...completedTodos]);
        }
    }

    return (
        <>
            <footer className="footer">
                <span className="todo-count">{activeTodos.length} items left</span>
                <TasksFilter onClick={handleFilter} />
                <button className="clear-completed">Clear completed</button>
            </footer>
        </>
    )
}