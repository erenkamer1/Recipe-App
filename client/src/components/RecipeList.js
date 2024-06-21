import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL, APP_ID, APP_KEY } from '../config';
import { Navigate, useNavigate, useLocation } from "react-router-dom";


const RecipeList = () =>{
    const [recipes , setRecipes] = useState([])
    const [query, setQuery] = useState("") // default search
    const [userInputSearch, setUserInputSearch] = useState("")
    

    const location = useLocation()


    useEffect(() => {
        if (location.state) {
            let catTitle =  location.state.categoryTitle
            setQuery(catTitle)
        }
        
      }, [location]);


    useEffect(() => {
        if (query !== "") {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.edamam.com/search`, {
                    params: {
                        q: query,
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
        }
    }, [query])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = userInputSearch
        setUserInputSearch(searchQuery)
        setQuery(searchQuery)
       
    } 

     let handleChange = (e) => {
        
        setUserInputSearch(e.target.value)
        console.log(userInputSearch)
    }


    return (
        <div className="recipe-list">
            <form onSubmit={handleSearch} className='search-input'>
                <input type="text" name="query" placeholder="Search for a recipe" onChange={handleChange} className='searchBar'/>
                <button type="submit" onSubmit={handleSearch} className='search-button'>Search</button>
            </form>
            <h2 className='categories-heading'>{query.toUpperCase()}</h2>
            <div className="categories">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe">
                        <h2>{recipe.recipe.label}</h2>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                        <p>Calories: {recipe.recipe.calories.toFixed(2)} Kcal</p>
                        <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeList;