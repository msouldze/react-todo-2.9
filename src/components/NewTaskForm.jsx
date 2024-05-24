import { useState } from 'react'
import { useTasksListContext } from "./TaskProvider";

export default function NewTaskForm() {
    const { todos, setTodos } = useTasksListContext();
    const nextId = todos[todos.length - 1].id;

    function addTodo(event) {
      const todo = {
        id: nextId + 1,
        title: event.target.value,
        completed: false
      }

      if(event.key === 'Enter') {
        setTodos([...todos, todo]);
        event.target.value = '';
      }
    }

    return (
        <>
            <input className="new-todo" placeholder="What needs to be done?" onKeyDown={addTodo} autoFocus />
        </>
    )
}