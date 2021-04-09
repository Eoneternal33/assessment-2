import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../state/taskList/taskListSlice';

import './SubmitTask.css';
import Task from './Task';

const SubmitTask = (props) => {
    // Get access to the dispatch using useDispatch() from 'react-redux'.
    const dispatch = useDispatch(addTask);
    const [newTask, setNewTask] = useState({ completed: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch an action that we imported from the slice, with a payload of "newTask".
        dispatch(addTask({
            item: newTask,
        }));
    };

    return (
        <form className="task-submit-form" onSubmit={handleSubmit}>
            <label htmlFor="task-type">Task Name</label>
            <input id="task-type" type="text" onChange={(e) => setNewTask({ description: e.target.value })}></input>
            <button type="submit">Submit Task</button>
            <Task />
        </form>
    )
};

export default SubmitTask;