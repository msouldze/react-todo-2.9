import { useContext, useState } from "react";
import { TasksContext } from "./TasksContext";
import { todoList } from "../utils/data.js";

function TaskProvider({children}) {
    const [tasks] = useState(todoList);
    
    return (
        <TasksContext.Provider value={{tasks}}>
            {children}
        </TasksContext.Provider>
    )
}

export const useTasksListContext = () => useContext(TasksContext);

export default TaskProvider;