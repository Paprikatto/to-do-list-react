import { Task } from './ToDoList'
import { useState } from 'react'
export default function Tasks({ content, toggle }: any) {
    const [showButtons, setShowButtons] = useState<boolean>(false)
    const priorities = ["high", "medium", "low"]
    let prevPriority = 0
    return (
        content.map((item: Task) => {
            let renderPriority = prevPriority !== item.priority
            prevPriority = item.priority
            return (
                <span key={item.id} >
                    {renderPriority && <h2>{priorities[item.priority - 1]} priority</h2>}
                    <li
                        className='task-list-item'
                        style={{
                            textDecoration: item.done ? "line-through" : "",
                            cursor: "pointer"
                        }}

                        onMouseOver={() => setShowButtons(true)}
                        onMouseLeave={() => setShowButtons(false)}
                    >
                        <span
                            onClick={() => toggle(item.id)}
                        >
                            {item.text}
                        </span>
                        {showButtons &&
                            <span className='task-buttons'>
                                <button className='edit-task-button'>edit</button>
                                <button className='remove-task-button'>x</button>
                            </span>}
                    </li>
                </span>
            )
        }))
}