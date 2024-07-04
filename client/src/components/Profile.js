import React from 'react';
import { useNavigate } from "react-router-dom";


function Profile({ user, favRecipes, setFavRecipes, deleteFavRecipe, deleteAllFavRecipes, logout, deleteFavRecipeFromDB }) {
  let navigate = useNavigate();
  console.log(favRecipes);
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
      <button onClick={deleteAllFavRecipes} className='delete-all-favs'>Delete all favourites</button>
      </div>
      <div className="fav-recipes">
        {favRecipes && favRecipes.map((recipe, idx) => (
          <div key={idx}>
            <h3>{recipe.label}</h3>
            <img src={recipe.image} alt={recipe.label} />
            <p>{recipe.calories}</p>
            <button onClick={console.log(recipe)}>
              <a href={recipe.viewRecipe}>View Recipe</a>
            </button>
            <button onClick={(e) => deleteFavRecipe(e, user.email, favRecipes)}>
              Delete from favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Profile;