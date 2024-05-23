import { useFiltersContext } from './FilterProvider';

export default function TasksFilter() {
    const { filters, setFilters } = useFiltersContext();
    const buttons = Object.keys(filters);

    function handleFilter(event) {
        if(event.target.innerText === 'All') {
            setFilters({
                All: true,
                Active: false,
                Completed: false
            })
        } else if(event.target.innerText === 'Active') {
            setFilters({
                All: false,
                Active: true,
                Completed: false
            })
        } else if(event.target.innerText === 'Completed') {
            setFilters({
                All: false,
                Active: false,
                Completed: true
            })
        }
    }

    return (
        <>
            <ul className="filters">
                {
                    buttons.map((button) => {
                        return (
                            <li key={button}>
                                <button className={filters[button] ? 'selected' : undefined} onClick={handleFilter}>{button}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}