import React from 'react';

const ViewSavedShoppingList = ({ user, shoppingList }) => {
  console.log("Received shopping list:", shoppingList);

  return (
    <div className="view-saved-shopping-list">
      <h1>Saved Shopping List for {user.email}</h1>
      <ul>
        {shoppingList.length > 0 ? (
          shoppingList.map((item, idx) => (
            <li key={idx}>
              {item.item} - {item.piece} Pieces - {item.kg} Kg
            </li>
          ))
        ) : (
          <li>No items in the shopping list</li>
        )}
      </ul>
    </div>
  );
};

export default ViewSavedShoppingList;
