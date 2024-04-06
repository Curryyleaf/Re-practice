import React from "react";

const Categories = ({ filterItems, categories }) => {

  return (
    <div className="btn-container">

      {categories.map((Category, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterItems(Category)}
          >
            {Category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
