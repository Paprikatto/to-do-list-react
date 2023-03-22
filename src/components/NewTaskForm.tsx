import { useState } from 'react';
import { Task, NewTask } from './ToDoList'

export default function NewTaskForm({ addTask }: any) {
    const [inputValue, setInputValue] = useState<NewTask>({
        text: "",
        priority: "3"
    });


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
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
        addTask(newTask)
        setInputValue({ text: "", priority: "3" });
    }


    return (
        <form onSubmit={handleSubmit}>
            <select name="priority" value={inputValue.priority} onChange={handleInputChange}>
                <option value={1}>High</option>
                <option value={2}>Medium</option>
                <option value={3}>Low</option>
            </select>
            <input type="text" name="text" value={inputValue.text} onChange={handleInputChange} />
            <button type="submit">Add</button>
        </form>
    )
}