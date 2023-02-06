import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteClick}) {



  const allTasks = tasks.map((task) => (
    <Task key={task.text} onDeleteClick={onDeleteClick} {...task} />
  ));



  return (
    <div className="tasks">
        {allTasks}
    </div>
  );
}

export default TaskList;
