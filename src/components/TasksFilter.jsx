import { useState } from 'react'

export default function TasksFilter({ onClick }) {
    const [all, setAll] = useState(true);
    const [active, setActive] = useState(false);
    const [completed, setCompleted] = useState(false);

    function handleFilter(event) {
        if(event.target.innerText === 'All') {
            setAll(true);
            setActive(false);
            setCompleted(false);
            onClick(event);
        } else if(event.target.innerText === 'Active') {
            setActive(true);
            setAll(false);
            setCompleted(false);
            onClick(event);
        } else if(event.target.innerText === 'Completed') {
            setCompleted(true);
            setAll(false);
            setActive(false);
            onClick(event);
        }
    }
    return (
        <>
            <ul className="filters">
                <li>
                    <button className={all ? 'selected' : undefined} onClick={handleFilter}>All</button>
                </li>
                <li>
                    <button className={active ? 'selected' : undefined} onClick={handleFilter}>Active</button>
                </li>
                <li>
                    <button className={completed ? 'selected' : undefined} onClick={handleFilter}>Completed</button>
                </li>
            </ul>
        </>
    )
}