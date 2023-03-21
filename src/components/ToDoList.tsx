import { useState } from "react";
import NewTaskForm from "./NewTaskForm";

export interface Task {
    id: number;
    text: string;
    done: boolean;
    priority: number;
}
export interface NewTask {
    text: string;
    priority: string;
}

export default function ToDoList() {
    const priorities = ["high", "medium", "low"]
    const [tasks, setTasks] = useState<Task[]>([]);

    function AddTask(newTask: Task) {
        setTasks([...tasks, newTask])
    }

    function toggleDone(taskId: number) {
        const updatedTodos = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    done: !task.done,
                };
            }
            return task;
        });
        setTasks(updatedTodos);
    }
    const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority)
    let prevPriority = 0
    return (
        <div>
            <NewTaskForm addTask={AddTask} />
            <ul>
                {/*lista tasków */}
                {
                    sortedTasks.map((item) => {
                        let renderPriority = prevPriority !== item.priority
                        prevPriority = item.priority
                        console.log(item.priority)
                        return (
                            <span key={item.id}>
                                {renderPriority && <h2>{priorities[item.priority - 1]} priority</h2>}
                                <li
                                    style={{
                                        textDecoration: item.done ? "line-through" : "",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => toggleDone(item.id)}
                                >
                                    {item.text}
                                </li>
                            </span>
                        )
                    })
                }
            </ul>
        </div>
    )
}