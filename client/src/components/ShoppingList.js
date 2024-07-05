import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { URL } from "../config";

function ShoppingList({user}) {
  const [itemInput, setItemInput] = useState("");
  const [pieceInput, setPieceInput] = useState("");
  const [kgInput, setKgInput] = useState("");
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  const addShoppingListToDB = async (email, shoppingList) => {
    try {
      const response = await axios.post(`${URL}/users/shoppingList/add`, { email, shoppingList });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const saveShoppingList = async () => {
    try {
      const responseData = await addShoppingListToDB(user.email, list);
      console.log(responseData);
      alert("Shopping list saved");
    } catch (error) {
      console.log(error);
    }
  };

const handleSeeSavedLists = () => {
  navigate("/viewSavedShoppingList", {state: {list}});
  console.log(list)
};


  let handleChangeItem = (e) => {
    e.preventDefault();
    setItemInput(e.target.value);
  };
  let handleChangePiece = (e) => {
    e.preventDefault();
    setPieceInput(e.target.value);
  };
  let handleChangeKg = (e) => {
    e.preventDefault();
    setKgInput(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { item: itemInput, piece: pieceInput, kg: kgInput, completed: false }]);
    setItemInput("");
    setPieceInput("");
    setKgInput("");
  };

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

  return (
    <div className="shopping-list">
      <h1>Shopping List for {user.email}</h1>
      <form onSubmit={handleSubmit} className="list-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Item Name"
            value={itemInput}
            onChange={handleChangeItem}
          />
          <input
            type="text"
            placeholder="Piece"
            value={pieceInput}
            onChange={handleChangePiece}
          />
          <span className="divider">/</span>
          <input
            type="text"
            placeholder="KG"
            value={kgInput}
            onChange={handleChangeKg}
          />
        </div>
        <button type="submit">Add to list</button>
      </form>
      <div className="items_list">
        <h2>List</h2>
        <ul>{listRender}</ul>
      </div>
      <button onClick={saveShoppingList} className="save-button">Save</button>
      <div>
      <button onClick={handleSeeSavedLists}>See saved lists</button>
      </div>
    </div>
  );
}

export default ShoppingList;