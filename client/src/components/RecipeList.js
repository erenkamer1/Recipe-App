import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  APP_ID, APP_KEY } from '../config';
import {  useLocation, useParams } from "react-router-dom";



const RecipeList = ({favClick, favRecipes, setFavRecipes}) =>{
    const [recipes , setRecipes] = useState([])
    const [query, setQuery] = useState("") // default search
    const [userInputSearch, setUserInputSearch] = useState("")
    
   
    const location = useLocation();
    const [categoryTitle, setCategoryTitle] = useState(location.state ? location.state.categoryTitle || location.state.query : "")
    
    

   


 


    useEffect(() => {
        
        const fetchData = async () => {
            try {
                setRecipes([]);
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
        setUserInputSearch(userInputSearch);
        setQuery(userInputSearch);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setUserInputSearch(e.target.value);
    };
    
    


    return (
        <div className="recipe-list">
            <form onSubmit={handleSearch} className='search-input'>
                <input type="text" name="query" placeholder="Search for a recipe" onChange={handleChange} className='searchBar'/>
                <button type="submit" onSubmit={handleSearch} className='search-button'>Search</button>
            </form>
            
            <h2 className='categories-heading'>{categoryTitle}</h2>
            <div className="categories">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe">
                        <h2>{recipe.recipe.label.toUpperCase()}</h2>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                        <p>Calories: {recipe.recipe.calories.toFixed(2)} Kcal</p>
                        <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                        <button onClick={favClick}>FAV</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeList;