import React, { useState, useEffect } from "react";
import axios from "axios";
import { APP_ID, APP_KEY } from "../config";
import { useNavigate } from "react-router-dom";
import CategoryLists from "../CategoryLists.js";
import BestRecipes from "../BestRecipes.js";
import "../App.css";

const Home = ({ favClick }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState(""); // default search
  const [userInputSearch, setUserInputSearch] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [defaultRecipes, setDefaultRecipes] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setRecipes([]);
        const searchQuery = categoryTitle || query;
        if (searchQuery) {
          const response = await axios.get(`https://api.edamam.com/search`, {
            params: {
              q: searchQuery,
              app_id: APP_ID,
              app_key: APP_KEY,
            },
          });
          setRecipes(response.data.hits);
        }
      } catch (error) {
        console.error("Error fetching the recipes:", error);
      }
    };
    fetchData();
  }, [query, categoryTitle]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCategoryTitle("");
    const searchedQuery = userInputSearch;
    setUserInputSearch(searchedQuery);
    setQuery(searchedQuery);
    navigate(`/recipes/${searchedQuery}`, { state: { query: searchedQuery } });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserInputSearch(e.target.value);
  };

  const listRender = (
    <div className="categories">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe">
          <h2>{recipe.recipe.label}</h2>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <p>Calories: {recipe.recipe.calories.toFixed(2)} Kcal</p>
          <a
            href={recipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Recipe
          </a>
          <button onClick={(e) => favClick(e, recipe)}>FAV</button>
        </div>
      ))}
    </div>
  );

  const handleClick = (e) => {
    e.preventDefault();
    setQuery("");
    const catTitle = e.target.closest("div").querySelector("h2").textContent;
    setCategoryTitle(catTitle);
    navigate(`/recipes/${catTitle}`, { state: { categoryTitle: catTitle } });
    setDefaultRecipes(false);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSearch} className="search-input">
          <input
            type="text"
            className="searchBar"
            name="query"
            placeholder="Search for a recipe"
            onChange={handleChange}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {listRender}
      </div>

      {defaultRecipes ? (
        <>
          <div>
            <h2 className="categories-heading">Categories</h2>
            <div>
              <CategoryLists handleClick={handleClick} favClick={favClick} />
            </div>
          </div>
          <div>
            <h2 className="best-recipes-heading">Best Recipes</h2>
            <div>
              <BestRecipes handleClick={handleClick} />
            </div>
          </div>
        </>
      ) : (
        <div>
          <h2>{categoryTitle}</h2>
        </div>
      )}
      <footer>Copyright by Eren 2024</footer>
    </>
  );
};

export default Home;
