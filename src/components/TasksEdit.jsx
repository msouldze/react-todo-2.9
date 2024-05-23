import { useState } from "react";

export default function TasksEdit({id, title, onChange, onKeyDown}) {
    
    const [newTitle, setTitle] = useState(title);

    const updateTitle = (id, e) => {
        onChange(id, e);
        setTitle(e.target.value);
    }
    
    return (
        <>
            <input type="text" className="edit" value={newTitle} onKeyDown={onKeyDown} onChange={(e) => updateTitle(id, e)} />
        </>
    )
}