import { useState } from "react";
import TasksEdit from "./TasksEdit";
import dateFormatter from "../utils/utils";

function Task({task, onDelete, onChange }) {
    const {id, title, date} = task;
    
    const [statusState, setStatusState] = useState('');
    const [checked, setChecked] = useState(false);

    function handleClick() {
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
                    <input className="toggle" type="checkbox" onClick={handleClick}/>
                    <label>
                        <span className="description">{title}</span>
                        <span className="created">{`created ${dateFormatter(date)} ago`}</span>
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

  