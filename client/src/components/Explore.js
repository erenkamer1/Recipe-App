import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  APP_ID, APP_KEY, URL } from '../config';
import {  useLocation, useNavigate } from "react-router-dom";



const Explore = ({user, favRecipes, setFavRecipes}) =>{
    const [recipes , setRecipes] = useState([])
    const [query, setQuery] = useState("") // default search
    const [userInputSearch, setUserInputSearch] = useState("")
    
    const location = useLocation();
    const [categoryTitle, setCategoryTitle] = useState(location.state ? location.state.categoryTitle || location.state.query : "")
    
    const navigate = useNavigate()

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                let searchQuery = categoryTitle || query ;
                const response = await axios.get(`https://api.edamam.com/search`, {
                    params: {
                        q: searchQuery,
                        app_id: APP_ID,
                        app_key: APP_KEY,
                        from: 0,
                        to: 20
                    }});
                    console.log(response.data);
                    setRecipes(response.data.hits); 
            } catch (error) {
                console.error('Error fetching the recipes:', error)
            }
        }
        fetchData()  
        
    }, [query, categoryTitle ])

    const handleSearch = (e) => {
        e.preventDefault();
        setCategoryTitle("")
        setQuery(userInputSearch);
        console.log(query)
    };

    const handleChange = (e) => {
        e.preventDefault();
        setUserInputSearch(e.target.value);
    };
    
     let handleViewRecipeClick = (recipe) => {
        console.log("Clicked recipe:", recipe);
    navigate(`/home/${recipe.recipe.label}`, {state : {recipe: recipe}})
    console.log(recipe)
} 

const addFavRecipeToDB = async (email, favRecipes) => {
    try {
      const response = await axios.post(`${URL}/users/favRecipes/add`, {email, favRecipes});
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  const favClick = async (recipe) => {
    console.log("fava eklenen recipe===>>" , recipe);
    const recipeData = {
      label: recipe.recipe.label,
      image: recipe.recipe.image,
      calories: recipe.recipe.calories,
      url: recipe.recipe.url,
      ingredients: recipe.recipe.ingredients,
      ingredientLines: recipe.recipe.ingredientLines,
      healthLabels: recipe.recipe.healthLabels,
      cuisineType: recipe.recipe.cuisineType,
      dishType: recipe.recipe.dishType,
      mealType: recipe.recipe.mealType
    };
  
    const currentFavRecipes = Array.isArray(favRecipes) ? favRecipes : [];
  
    const newFavRecipes = [...currentFavRecipes, recipeData];
    setFavRecipes(newFavRecipes);
    /* localStorage.setItem("favRecipes", JSON.stringify(newFavRecipes)); */
  
    try {
      await addFavRecipeToDB(user.email, newFavRecipes);
      console.log(newFavRecipes);
      alert("Recipe added to favourites");
    } catch (error) {
      console.error(error);
      alert("Failed to add recipe to favourites");
    }
  };

  

    return (
        <div className="recipe-list">
            <form onSubmit={handleSearch} className='search-input'>
                <input type="text" name="query" placeholder="Search for a recipe" onChange={handleChange} className='searchBar'/>
                <button type="submit" onSubmit={handleSearch} className='search-button'>Search</button>
            </form>
            
            <h2 className='categories-heading'>{query.toUpperCase() || categoryTitle.toUpperCase()}</h2>
            <div className="categories">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe">
                        <h2 onClick={() => {handleViewRecipeClick(recipe)}}>{recipe.recipe.label}</h2>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} onClick={() => {handleViewRecipeClick(recipe)}}/>
                        <p onClick={() => {handleViewRecipeClick(recipe)}}>Calories: {recipe.recipe.calories.toFixed(2)} Kcal</p>
                        <section className='add-to-fav'>
                        <h2>Add to FAVS</h2>
                        <button><img className="star" src={"/assets/icons8-star-64.png"} alt="star"  onClick={() => favClick(recipe)} />  </button>
                        </section>                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore;