import React from 'react';

function Profile({ user, favRecipes, deleteFavRecipeFromDB }) {
  console.log(favRecipes);

  /* let handleDeleteRecipe = (recipe) => {
    console.log("Clicked recipe:", recipe);

  }; */
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
            <button onClick={() => window.open(recipe.url)}><a href={recipe.viewRecipe}>View Recipe</a></button>
            <button onClick={(e) => deleteFavRecipeFromDB(e ,user.email, favRecipes)}>Delete from favourites</button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
