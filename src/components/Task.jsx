import React, {useState} from 'react';


function Task({addTask, removeTask, completeTask}) {


    return addTask.map((task, index) => (
        <div 
        className={addTask.isComplete ? 'task-row complete': 'task-row'} key={task.index}>
            <button className="complete"
            onClick={() => completeTask(Task.index)}
            ></button>
            <button className="remove"
            onClick={() => removeTask(Task.index)}></button>
        </div>
    ))
}

export default Task;
