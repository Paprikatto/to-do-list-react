export default function NewTaskForm(props: any) {
    return (
        <form onSubmit={props.onSubmit}>
            <select name="priority" value={props.NewTaskData.priority} onChange={props.onChange}>
                <option value={1}>High</option>
                <option value={2}>Medium</option>
                <option value={3}>Low</option>
            </select>
            <input type="text" name="text" value={props.NewTaskData.text} onChange={props.onChange} />
            <button type="submit">Add</button>
        </form>
    )
}