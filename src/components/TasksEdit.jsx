import { useState } from "react";

export default function TasksEdit({id, title, onChange, onKeyDown}) {
    
    const [newTitle, setTitle] = useState(title);

    const updateTitle = (e, id) => {
        const { value } = e.target;
        onChange(value, id);
        setTitle(value);
    }
    
    return (
        <>
            <input type="text" className="edit" value={newTitle} onKeyDown={(e) => onKeyDown(e)} onChange={(e) => updateTitle(e, id)} />
        </>
    )
}