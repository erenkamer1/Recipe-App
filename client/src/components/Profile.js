import React from 'react';

function Profile({ user, favRecipes }) {
  console.log(favRecipes);
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <h2>Favourite Recipes {user.email}</h2>
      <div className="fav-recipes">
        {favRecipes.map((recipe, idx) => (
          <div key={idx}>
            <h3>{recipe.label}</h3>
            <img src={recipe.image} alt={recipe.label} />
            <p>{recipe.calories}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
