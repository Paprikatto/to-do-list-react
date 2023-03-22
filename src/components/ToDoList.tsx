import { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import Tasks from "./Tasks";

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

    return (
        <div>
            <NewTaskForm addTask={AddTask} />
            <ul>
                <Tasks content={sortedTasks} toggle={toggleDone} />
            </ul>
        </div>
    )
}