import React, { useEffect } from 'react';
import { URL } from '../config';
import axios from 'axios';

const ViewSavedShoppingList = ({ user, shoppingList, setShoppingList }) => {

  useEffect(()  => async () => {
    const response = await axios.post(`${URL}/users/shoppingList/get`, { email: user.email});
    debugger
    console.log("Fetched shopping list:", response.data);
    setShoppingList(response.data.shoppingList); 
        /* localStorage.setItem("shoppingList", JSON.stringify(response.data.shoppingList)); */
        console.log("Shopping list:", response.data.shoppingList);
  }, []);

  const handleDeleteItem = async (item) => {
    try {
      const updatedList = shoppingList.filter((el) => el.item !== item.item || el.piece !== item.piece || el.kg !== item.kg);
      const response = await axios.post(`${URL}/users/shoppingList/save`, { email: user.email, shoppingList: updatedList });
      setShoppingList(updatedList);
      alert('Item deleted successfully!');
    } catch (error) {
      console.error('Error deleting item:', error);
    } 
  };

  return (
    <div className="view-saved-shopping-list">
      <h1 className="title">Saved Shopping List for {user.email}</h1>
      <ul className="shopping-list">
        {shoppingList.length > 0 ? (
          shoppingList.map((item, idx) => (
            <li key={idx} className="shopping-item">
              {idx + 1}. {item.item} - Pieces: {item.piece} - Kg: {item.kg}
              <button onClick={() => handleDeleteItem(item)} className='delete-shopping-item'>Delete</button>
            </li>
          ))
        ) : (
          <li className="no-items">No items in the shopping list</li>
        )}
      </ul>
    </div>
  );
};

export default ViewSavedShoppingList;
