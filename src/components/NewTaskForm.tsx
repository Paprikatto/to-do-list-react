export default function NewTaskForm(props: any) {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" name="text" value={props.inputValue} onChange={props.onChange} />
            <button type="submit">Add</button>
        </form>
    )
}