import React , {useEffect} from "react";
import { Navigate, useParams } from "react-router-dom";

function Profile ({props}) {
    const {  favRecipes, setFavRecipes } = props
    console.log(favRecipes)
    return (
        <div className="profile">
            
        <h1>Profile Page</h1>
        <h2>Favourite Recipes {props.user.email}</h2>
        <div className="">
            {props.favRecipes.map((recipe, idx) => (
                <div key={idx}>
                    <h3>{recipe.label}</h3>
                    <img src={recipe.image} alt={recipe.label} />
                    {/* <p>{recipe.calories}</p>
                    <a href={recipe.viewRecipe} target="_blank" rel="noopener noreferrer">View Recipe</a> */}
                    </div>
            )

            )}
       </div>
        </div>
    )
}

export default Profile;
