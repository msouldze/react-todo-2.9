import { useState } from 'react'

export default function TasksFilter() {
    // const [selected, setSelected] = useState(false);
    // const [notSelected, setNotSelected] = useState(true);
    
    // function handleFilter(event) {
    //     event.target.classList.add('selected');
    //     setSelected(true);
    //     setNotSelected(false);
    // }

    const btns = ['All', 'Active', 'Completed'];

    return (
        <>
            <ul className="filters">
                {btns.map((btn, i) => {
                    let selected = i === 0 ? 'selected' : '';
                    return (
                        <li key={btn}>
                            <button className={selected}>{btn}</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}