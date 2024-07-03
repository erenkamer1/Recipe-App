import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom";
import Home from "./containers/Home.js";
import Login from "./containers/Login.js";
import Register from "./containers/Register.js";
import SecretPage from "./containers/SecretPage.js";
import Navbar from "./components/Navbar.js";
import Explore from "./components/Explore.js"
import { URL } from "./config.js";
import * as jose from "jose";
import Profile from "./components/Profile.js";
import ShoppingList from "./components/ShoppingList.js";
import SingleRecipe from "./components/SingleRecipe.js";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [favRecipes, setFavRecipes] = useState(JSON.parse(localStorage.getItem("favRecipes")) || []);

  useEffect(() => {
    const verify_token = async () => {
      try {
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
  
  
  const getFavRecipes  = async (email) => {
    try {
      const response = await axios.post(`${URL}/users/getFavRecipes`, {email});
      console.log(response.data)
      setFavRecipes(response.data.favRecipes)
    } catch (error) {
      console.log(error);
    }
  }

  const addFavRecipeToDB = async (email, favRecipes) => {
    try {
      const response = await axios.post(`${URL}/users/addFavRecipe`, {email, favRecipes});
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteFavRecipe = async (email, favRecipes) => {
    try {
      const response = await axios.post(`${URL}/users/deleteFavRecipe`, {email, favRecipes});
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteFavRecipeFromDB = async (e) => {
    e.preventDefault();
  
    const recipeData = {
      label: e.target.closest("div").querySelector("h3").textContent,
      image: e.target.closest("div").querySelector("img").getAttribute("src"),
      calories: e.target.closest("div").querySelector("p").textContent,
    };
  
    setFavRecipes(favRecipes.filter((recipe) => recipe.label !== recipeData.label));
    deleteFavRecipe(user.email, favRecipes.filter((recipe) => recipe.label !== recipeData.label));
    alert("Recipe deleted from favourites");
    console.log(favRecipes);
  };
  

  const login = (token) => {
    debugger
    let decodedToken = jose.decodeJwt(token);
    // composing a user object based on what data we included in our token (login controller - jwt.sign() first argument)
    let user = {
      email: decodedToken.userEmail,
    };
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
    getFavRecipes(user.email)
  };
  
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const favClick = async (e) => {
     e.preventDefault(); 
     const recipeData = {
        label: e.target.closest("div").querySelector("h2").textContent,
        image: e.target.closest("div").querySelector("img").getAttribute("src"),
        calories: e.target.closest("div").querySelector("p").textContent
    } 
    setFavRecipes([...favRecipes , recipeData])
    addFavRecipeToDB(user.email, [...favRecipes , recipeData])
    console.log(favRecipes)
    alert("Recipe added to favourites")
}

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
 
      <Routes>
        <Route path="/" element={<Home favClick={favClick}/>} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/secret-page" />
            ) : (
              <Login login={login} />
            )
          }
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/secret-page" /> : <Register />}
        />
        <Route
          path="/secret-page"
          element={
            !isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <SecretPage logout={logout} user={user} />
            )
          }
        />
        <Route path="/explore" element={<Explore  favRecipes={favRecipes} setFavRecipes={setFavRecipes} favClick={favClick}/>} />
        <Route path="/explore/:category" element={<Explore favClick={favClick} favRecipes={favRecipes} setFavRecipes={setFavRecipes}/>} />
        <Route path="/profile" element={ !isLoggedIn ? (<Navigate to={"/"} />) : (<Profile logout={logout} user={user} favClick={favClick} favRecipes={favRecipes} setFavRecipes={setFavRecipes} deleteFavRecipeFromDB={deleteFavRecipeFromDB}/>)} />
        <Route path="/shopping-list" element={!isLoggedIn ? (<Navigate to={"/"} />) : (<ShoppingList user={user} />)} />
        <Route path="/home/:recipe" element={<SingleRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;