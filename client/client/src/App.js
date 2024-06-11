import React, {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";
import ShoppingList from "./components/ShoppingList";
import IngredientInput from "./components/IngredientInput";
import {useNavigate} from "react-router-dom";


function App() {
  return (
    <div className="recipe-app">
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
