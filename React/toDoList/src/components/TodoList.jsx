import React, { useState } from 'react';

// TodoList component, using state in the child component because it does not need to pass data to another component via parent.
const TodoList = () => {
    const [tasks, setTasks] = useState([]); // Empty list of tasks
    const [newTask, setNewTask] = useState(''); // New task input

    // Function: adding a new task
    const addTask = () => {
        console.log("Creating a new task:", newTask); // Log the task text
        if (newTask !== '') { // Check if the new task input is not empty
            const updatedTasks = [...tasks, { text: newTask, completed: false }]; // Create a new task object with text AND default to completed being false
            setTasks(updatedTasks); // Update the 'tasks' state with the new task
            setNewTask(''); // Clear the newTask input
        }
    };

    // Function: removing task
    const removeTask = (index) => {
        const removedTask = tasks[index].text; // Get the text of the task being removed
        const updatedTasks = [...tasks]; // Create a copy of the 'tasks' array
        updatedTasks.splice(index, 1); // Removes the task at the specified index from the updatedTasks array, 1 determines how many positions (after index) to delete
        setTasks(updatedTasks); // Update the 'tasks' state with the updated array
        console.log("Removing a task:", removedTask); // Log the task text being removed
};

    // Function: toggling task completion
    const toggleCompletion = (index) => {
        const updatedTasks = [...tasks]; // Create a copy of the 'tasks' array
        const taskToToggle = updatedTasks[index]; // Get the task being toggled
        taskToToggle.completed = taskToToggle.completed ? false : true; // If completed was true, it sets it to false, and vice versa
        setTasks(updatedTasks); // Update the 'tasks' state with the updated array
        console.log("Toggling completion of task:", taskToToggle.text); // Log the task text being toggled
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Create a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompletion(index)}
                        />
                        <p style={{ display: 'inline', textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </p>
                        <button onClick={() => removeTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
