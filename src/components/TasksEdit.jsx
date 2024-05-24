export default function TasksEdit({id, title, onChange, onKeyDown}) {
    return (
        <>
            <input type="text" className="edit" value={title} onKeyDown={onKeyDown} onChange={(e) => onChange(id, e)} />
        </>
    )
}