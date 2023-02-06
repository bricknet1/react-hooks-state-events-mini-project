import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  
  const categoryOptions = categories.map((category)=>{
    if(category !== "All") {return (
      <option key={category}>{category}</option>
      )} else return null
    })
    
    const [category, setCategory] = useState("Code")
    
    function handleCategorySelect(e){
      setCategory(e.target.value)
    }
    
    const [details, setDetails] = useState("")
    
    function handleDetailsChange(e){
      setDetails(e.target.value)
    }


    function handleTaskFormSubmit(e){
      e.preventDefault();
      onTaskFormSubmit({text: details, category: category})
    }

  return (
    <form className="new-task-form" onSubmit={handleTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} value={details}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategorySelect} value={category}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
