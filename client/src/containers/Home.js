import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL, APP_ID, APP_KEY } from '../config';
import CategoryLists from "../CategoryLists.js"
import BestRecipes  from '../BestRecipes.js';
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
const [recipes , setRecipes] = useState([])
    const [query, setQuery] = useState("") // default search
    const [userInputSearch, setUserInputSearch] = useState("")
    /* const [mealType , setMealType] = useState("") */
     
               
       


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
        setQuery(searchQuery)
       
    }

    let handleChange = (e) => {
        e.preventDefault()
        setUserInputSearch(e.target.value)
        console.log(userInputSearch)
    }
    const listRender =  <div className="recipe-list">
    {recipes.map((recipe, index) => (
        <div key={index} className="recipe">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Calories: {recipe.recipe.calories.toFixed(2)} Kcal</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
        </div>
    ))}
</div>

    return (
        <>
        <div className="recipe-list">
            <form onSubmit={handleSearch} className='search-input'>
                <input type="text" className='searchBar' name="query" placeholder="Search for a recipe" onChange={handleChange}/>
                <button type="submit" className='search-button' >Search</button>
            </form>
           {listRender}
        </div>
        <div>
            <h2 className='categories-heading'>Categories</h2>
            <CategoryLists handleSearch={handleSearch} listRender={listRender} useEffect={useEffect} handleChange={handleChange} />
        </div>
        <div> 
        <h2 className='best-recipes-heading'>Best Recipes</h2>
        <BestRecipes />
        </div>
        </>
    )
}

export default Home;
