import '../styles/Footer.css'
import { useState } from 'react';
import { useEffect } from 'react';
import TasksFilter from "./TasksFilter"
import { useTasksListContext } from "./TaskProvider";

export default function Footer() {
    const { todos, setTodos } = useTasksListContext();
    const activeTodos = todos.filter(todo => !todo.completed);
    const [activeTodosCount, setActiveTodosCount] = useState(activeTodos.length);
    
    useEffect(() => {
        setActiveTodosCount(activeTodos.length);
    }, [todos]);

    // function handleDelete() {
    //     setTodos({...activeTodos});
    // }

    return (
        <>
            <footer className="footer">
                <span className="todo-count">{activeTodosCount} items left</span>
                <TasksFilter />
                <button className="clear-completed" >Clear completed</button>
            </footer>
        </>
    )
}