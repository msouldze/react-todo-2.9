import { createContext, useContext, useState, useEffect } from "react";

export const TasksContext = createContext({});

function TaskProvider({children}) {
    const [error, setError] = useState();
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const todos = await response.json();
                setTodos([...todos]);
            } catch(e) {
                setError(e);
            }
        }

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