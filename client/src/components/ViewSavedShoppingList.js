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

    const handleComplete = (idx) => {
        const newList = [...list];
        newList[idx].completed = !newList[idx].completed;
        setList(newList);
      };
    
      const handleDelete = (idx) => {
        const newList = [...list];
        newList.splice(idx, 1);
        setList(newList);
      };

    const listRender = list.map((ele, idx) => {
        const quantityCheck = (ele) => {
          if (ele.piece !== 0 && ele.piece === 1 && ele.kg === 0) {
            return `Piece: ${ele.piece}`;
          } else if (ele.piece !== 0 && ele.piece > 1 && ele.kg === 0) {
            return `Pieces: ${ele.piece}`;
          } else if (ele.piece === 0 && ele.kg !== 0) {
            return `Kg: ${ele.kg}`;
          } else if (ele.piece !== 0 && ele.piece === 1 && ele.kg !== 0) {
            return `Piece: ${ele.piece} Kg: ${ele.kg}`;
          } else if (ele.piece !== 0 && ele.piece > 1 && ele.kg !== 0) {
            return `Pieces: ${ele.piece} Kg: ${ele.kg}`;
          }
        };
      
        return (
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
        );
      });
}    
export default ViewSavedShoppingList;