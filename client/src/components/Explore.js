import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  APP_ID, APP_KEY } from '../config';
import {  useLocation, useParams, useNavigate } from "react-router-dom";



const RecipeList = ({favClick}) =>{
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
                        app_key: APP_KEY
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
                        <button><img className="star" src={"/assets/icons8-star-64.png"} onClick={favClick} />  </button>
                        </section>                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeList;