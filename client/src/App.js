import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./containers/Home.js";
import Login from "./containers/Login.js";
import Register from "./containers/Register.js";
import Navbar from "./components/Navbar.js";
import Explore from "./components/Explore.js"
import { URL } from "./config.js";
import * as jose from "jose";
import Profile from "./components/Profile.js";
import ShoppingList from "./components/ShoppingList.js";
import SingleRecipe from "./components/SingleRecipe.js";
import ProfileSingleRecipe from "./components/ProfileSingleRecipe.js";
import ViewSavedShoppingList from "./components/ViewSavedShoppingList.js";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [favRecipes, setFavRecipes] = useState(JSON.parse(localStorage.getItem("favRecipes")) || []);
  const [shoppingList, setShoppingList] = useState([]);
  useEffect(() => {
    localStorage.clear();
    const verify_token = async () => {
      try {
        localStorage.clear();
        if (!token) {
          setIsLoggedIn(false);
        } else {
          axios.defaults.headers.common["Authorization"] = token;
          const response = await axios.post(`${URL}/users/verify_token`);
          return response.data.ok ? login(token) : logout();
        }
      } catch (error) {
        console.log(error);
      }
    };
    verify_token();
  }, [token]);

  useEffect(() => {
    if (user && isLoggedIn) {
      getShoppingListFromDB(user.email);
      localStorage.clear();
    }
  }, [user, isLoggedIn]);

  const getFavRecipesFromDB  = async (email) => {
    try {
      const response = await axios.post(`${URL}/users/getFavRecipes`, { email });
      console.log(response.data);
      setFavRecipes(response.data.favRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  const getShoppingListFromDB = async (email) => {
    try {
      const response = await axios.post(`${URL}/users/shoppingList/get`, { email });
      console.log("Fetched shopping list:", response.data);
      
        setShoppingList(response.data.shoppingList); 
       /*  localStorage.setItem("shoppingList", JSON.stringify(response.data.shoppingList)); */
        console.log("Shopping list:", response.data.shoppingList);
     
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const deleteFavRecipeFromDB = async (email, newFavRecipes) => {
    try {
      const response = await axios.post(`${URL}/users/deleteFavRecipe`, { email, favRecipes: newFavRecipes });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavRecipe = async (e) => {
    e.preventDefault();

    const recipeData = {
      label: e.target.closest("div").querySelector("h3").textContent
    };
    console.log(recipeData);
    let idx = favRecipes.findIndex(recipe => recipe.label === recipeData.label);

    if (idx !== -1) {
      let newFavRecipes = favRecipes.slice();
      newFavRecipes.splice(idx, 1);

      await deleteFavRecipeFromDB(user.email, newFavRecipes);
      setFavRecipes(newFavRecipes);
      /* localStorage.setItem("favRecipes", JSON.stringify(newFavRecipes)); */
      alert("Recipe deleted from favourites");
    } else {
      alert("Recipe not found in favourites");
    }
  };

  const deleteAllFavRecipes = async () => {
    try {
      const emptyArray = [];
      await deleteFavRecipeFromDB(user.email, emptyArray);
      setFavRecipes(emptyArray);
      alert("All recipes deleted from favourites");
    } catch (error) {
      console.log(error);
    }
  };

  const login = (token) => {
    debugger;
    let decodedToken = jose.decodeJwt(token);
    let user = {
      email: decodedToken.userEmail,
    };
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
    getFavRecipesFromDB(user.email);
    /* getShoppingListFromDB(user.email); */
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/profile" />
            ) : (
              <Login login={login} />
            )
          }
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/profile" /> : <Register />}
        />
        <Route path="/explore" element={<Explore user={user} favRecipes={favRecipes} setFavRecipes={setFavRecipes} />} />
        <Route path="/explore/:category" element={<Explore  favRecipes={favRecipes} setFavRecipes={setFavRecipes} user={user} />} />
        <Route path="/profile" element={!isLoggedIn ? (<Navigate to={"/"} />) : (<Profile deleteAllFavRecipes={deleteAllFavRecipes} deleteFavRecipeFromDB={deleteFavRecipeFromDB}  logout={logout} user={user}  favRecipes={favRecipes} setFavRecipes={setFavRecipes} deleteFavRecipe={deleteFavRecipe}/>)}/>
        <Route path="/shopping-list" element={!isLoggedIn ? (<Navigate to={"/"} />) : (<ShoppingList user={user} />)} />
        <Route path="/viewSavedShoppingList" element={!isLoggedIn ? (<Navigate to={"/"} />) : (<ViewSavedShoppingList user={user} shoppingList={shoppingList} setShoppingList={setShoppingList} />)} />
        <Route path="/home/:recipe" element={<SingleRecipe />} />
        <Route path="/profile/:recipe" element={<ProfileSingleRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
