import React from 'react';
import { useNavigate } from "react-router-dom";



function Profile({ user, logout, deleteFavRecipeFromDB, favRecipes, setFavRecipes, deleteFavRecipe, deleteAllFavRecipes}) {
  let navigate = useNavigate();
  

  
  const handleViewRecipeClick = (recipe) => {
    console.log("Clicked recipe:", recipe);
    navigate(`/profile/${recipe.label}`, { state: { recipe } });
   
  };

  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <button className='logout'
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        logout
      </button>
      <div className='favorites'>
        <h2>Favourite Recipes {user.email}</h2>
        <button onClick={() => deleteAllFavRecipes()} className='delete-all-favs'>Delete all favourites</button>
      </div>
      <div className="fav-recipes">
      {favRecipes && favRecipes.map((recipe, idx) => (
  <div key={idx}>
    {recipe && (
      <div>
        <h3 onClick={() => handleViewRecipeClick(recipe)}>{recipe.label}</h3>
        <img src={recipe.image} alt={recipe.label} onClick={() => handleViewRecipeClick(recipe)}/>
        <p>Calories: {recipe.calories.toFixed(2)} Kcal</p>
        <button onClick={() => handleViewRecipeClick(recipe)} className='view-recipe-profile'>View Recipe</button>
        <button onClick={(e) => deleteFavRecipe(e, recipe)} className='delete-recipe-profile'>Delete from favourites</button>
      </div>
    )}
  </div>
))}
      </div>
    </div>
  );
}
export default Profile;