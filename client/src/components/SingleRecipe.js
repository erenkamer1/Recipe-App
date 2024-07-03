import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function SingleRecipe() {
  const location = useLocation();
  const [recipe, setRecipe] = useState(location.state ? location.state.recipe : null);
  console.log("Received recipe:", recipe);

  if (!recipe) {
    return <div>No recipe data available.</div>;
  }

  let ingredients = recipe.recipe.ingredients.map((item, idx) => (
    <li key={idx}>
      {item.text}: {item.quantity} {item.measure}
    </li>
  ));

  let healthLabels = recipe.recipe.healthLabels.map((item, idx) => (
    <li key={idx}>{item}</li>
  ));

  return (
    <div className="single-recipe-container">
      <div className="single-recipe-header">
        <h1>{recipe.recipe.label}</h1>
        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      </div>
      <div className="recipe-details">
        <div className="recipe-header">
          <p>Calories: {recipe.recipe.calories.toFixed(2)} Kcal</p>
          <a href={recipe.recipe.url} className="view-recipe">View Full Detailed Recipe</a>
        </div>
        <h2>Ingredients</h2>
        <ul className="ingredients">{ingredients}</ul>
        <h2>Meal Type</h2>
        <p>{recipe.recipe.mealType.join(", ")}</p>
        <h2>Health Labels</h2>
        <ul className="recipe-labels">{healthLabels}</ul>
      </div>
    </div>
  );
}

export default SingleRecipe;
