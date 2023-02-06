import React from "react";

function CategoryFilter({categories, onCategoryChange, selectedCategory}) {
  
  const categoryButtons = categories.map((category)=>{
    const className = ((category === selectedCategory) ? "selected" : null)
    return (
      <button 
        key={category} 
        onClick={onCategoryChange} 
        value={category}
        className={className}
      >{category}</button>
    )
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
