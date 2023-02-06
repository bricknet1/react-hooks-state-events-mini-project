import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES)

  function handleDeleteClick(deletedTask){
    console.log("delete");
    setTasks(tasks.filter((task) => (task.text !== deletedTask)))
  }

  function handleCategoryChange(e){
    setSelectedCategory(e.target.value);
    const tasksToDisplay = ((e.target.value === "All") ? TASKS : TASKS.filter((task)=>task.category === e.target.value))
    setTasks(tasksToDisplay)
  }

  function handleTaskFormSubmit(newTask){
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasks} onDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
