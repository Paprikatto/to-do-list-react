import { useState } from "react";

interface Task {
    id: number;
    text: string;
    done: boolean;
}

export default function ToDoList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!inputValue) return;
        const newTask: Task = {
            id: Date.now(),
            text: inputValue,
            done: false,
        };
        setTasks([...tasks, newTask]);
        setInputValue("");
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
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {
                    tasks.map((item) => (
                        <li
                            key={item.id}
                            style={{
                                textDecoration: item.done ? "line-through" : "",
                                cursor: "pointer"
                            }}
                            onClick={() => toggleDone(item.id)}
                        >
                            {item.text}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}