import { createContext, useContext, useState, useEffect } from "react";

export const TasksContext = createContext({});

function TaskProvider({children}) {
    const [error, setError] = useState();
    const [todos, setTodos] = useState(null);

    const getTodos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const todos = await response.json();
            setTodos([...todos.slice(0, 9)]);
        } catch(e) {
            setError(e);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return todos && (
        <TasksContext.Provider value={{todos, setTodos}}>
            {children}
        </TasksContext.Provider>
    )
}

export const useTasksListContext = () => useContext(TasksContext);

export default TaskProvider;