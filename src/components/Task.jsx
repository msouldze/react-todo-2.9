import { useEffect, useState } from "react";
import TasksEdit from "./TasksEdit";
import dateFormatter from "../utils/utils";

function Task({todo, onDelete, onChange }) {
    const {id, title, completed} = todo;
    
    const [statusState, setStatusState] = useState('');
    const [checked, setChecked] = useState(completed);

    useEffect(() => {
        if(completed) {
            setStatusState('completed');
        }
    }, [completed])

    function handleChange() {
        const status = checked ? '' : 'completed';
        setStatusState(status);
        setChecked(!checked);
    }

    function handleEdit() {
        setStatusState('editing');
    }

    function handleKeyDown(event) {
        const status = checked ? 'completed' : '';
        if(event.key === 'Enter') {
            setStatusState(status);
        }
    }

    return (
        <>
            <li className={statusState}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={handleChange} checked={checked} />
                    <label>
                        <span className="description">{title}</span>
                        <span className="created">{`created ${dateFormatter()} ago`}</span>
                    </label>
                    <button className='icon icon-edit' onClick={handleEdit}></button>
                    <button className='icon icon-destroy' onClick={() => onDelete(id)}></button>
                </div>
                {statusState === 'editing' ? <TasksEdit id={id} title={title} onChange={onChange} onKeyDown={handleKeyDown} /> : ''}
            </li>
        </>
    )
}

export default Task;

  