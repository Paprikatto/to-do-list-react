import { useState } from "react";
import NewTaskForm from "./NewTaskForm";

interface Task {
    id: number;
    text: string;
    done: boolean;
    priority: number;
}
interface NewTask {
    text: string;
    priority: string;
}

export default function ToDoList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState<NewTask>({
        text: "",
        priority: "3"
    });

    const priorities = ["high", "medium", "low"]

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!inputValue.text) return;
        const newTask: Task = {
            id: Date.now(),
            text: inputValue.text,
            done: false,
            priority: parseInt(inputValue.priority),
        };
        setTasks([...tasks, newTask]);
        setInputValue({ text: "", priority: "3" });
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
            <NewTaskForm onSubmit={handleSubmit} NewTaskData={inputValue} onChange={handleInputChange} />
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