function Task({ description, date }) {
    return (
        <>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{date}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        </>
    )
}

export default Task;
  