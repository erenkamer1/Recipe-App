import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function ViewSavedShoppingList() {
    const location = useLocation();
    const [list, setList] = useState(location.state ? location.state.list : null);
    console.log("Received list:", list);

    if (!list) {
        return <div>No list data available.</div>;
    }

    return (
        <div className="single-recipe-container">
           <div key={idx} className="list-item">
        <li className={`shopping-list-render ${ele.completed ? "completed" : ""}`}>
          {idx + 1}. {ele.item}
        </li>
        <div className="quantity">
          <li className="quantity-text">{quantityCheck(ele)}</li>
        </div>
        <div className="buttons">
          <button onClick={() => handleComplete(idx)} className="complete-button">
            {ele.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => handleDelete(idx)} className="delete-button">
            Delete
          </button>
        </div>
      </div>
        </div>
    );
}    
export default ViewSavedShoppingList;