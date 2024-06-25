/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryLists from '../CategoryLists';
import { URL, APP_ID, APP_KEY } from '../config';
import { Navigate, useNavigate } from "react-router-dom";

const ViewCategory = (categoryTitle) =>{
    const [recipes , setRecipes] = useState([])
    const [query, setQuerey] = useState(categoryTitle) 
    const [userInputSearch, setUserInputSearch] = useState("")

       


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
            
        }
        fetchData()
    }, [query])

    const handleSearch = (e) => {
        e.preventDefault()
        const searchQuery = userInputSearch
        setUserInputSearch(searchQuery)
     
       
       setQuerey(searchQuery)
       console.log(recipes)
    }

    let handleChange = (e) => {
        e.preventDefault()
        setUserInputSearch(e.target.value)
        console.log(userInputSearch)
    }

    return (
        
            
            <div className="recipe-list">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe">
                        <h2>{recipe.recipe.label}</h2>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                        <p>Calories: {recipe.recipe.calories.toFixed(2)} Kcal</p>
                        <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                    </div>
                ))}
            </div>
       
    )
}

export default ViewCategory; */