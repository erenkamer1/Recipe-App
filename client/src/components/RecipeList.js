import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL, APP_ID, APP_KEY } from '../config';

const RecipeList = () =>{
    const [recipes , setRecipes] = useState([])
    const [query, setQuerey] = useState("chicken") // default search

    useEffect(() => {
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
            fetchData()
        }
    }, [query])

    const handleSearch = (e) => {
        e.prevent.default()
        const searchQuery = e.target.elements.query.value.trim()
        setQuerey(searchQuery)
    }



    return (
        <div className="recipe-list">
            <form onSubmit={handleSearch}>
                <input type="text" name="query" placeholder="Search for a recipe"/>
                <button type="submit">Search</button>
            </form>
            <div className="recipe-list">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe">
                        <h2>{recipe.recipe.label}</h2>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                        <p>Calories: {recipe.recipe.calories.toFixed(2)}</p>
                        <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeList;