import { Task } from './ToDoList'
export default function Tasks({ content, toggle }: any) {
    const priorities = ["high", "medium", "low"]
    let prevPriority = 0
    return (
        content.map((item: Task) => {
            let renderPriority = prevPriority !== item.priority
            prevPriority = item.priority
            return (
                <span key={item.id}>
                    {renderPriority && <h2>{priorities[item.priority - 1]} priority</h2>}
                    <li
                        className='task-list-item'
                        style={{
                            textDecoration: item.done ? "line-through" : "",
                            cursor: "pointer"
                        }}
                        onClick={() => toggle(item.id)}
                    >
                        {item.text}
                    </li>
                </span>
            )
        }))
}