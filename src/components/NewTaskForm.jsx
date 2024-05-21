import { useState } from 'react'

export default function NewTaskForm({ addTodo }) {
    const [value, setValue] = useState('');

    return (
        <>
            <input className="new-todo" placeholder="What needs to be done?" onKeyDown={addTodo} autoFocus />
        </>
    )
}