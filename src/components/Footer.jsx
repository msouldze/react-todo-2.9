import '../styles/Footer.css'
import TasksFilter from "./TasksFilter"

export default function Footer({ todos }) {
    const completedTodos = todos.filter(todo => !todo.completed);

    return (
        <>
            <footer className="footer">
                <span className="todo-count">{completedTodos.length} items left</span>
                <TasksFilter />
                <button className="clear-completed">Clear completed</button>
            </footer>
        </>
    )
}