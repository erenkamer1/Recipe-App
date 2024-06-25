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
import RecipeList from "./components/RecipeList.js"
import { URL } from "./config.js";
import * as jose from "jose";
import Profile from "./components/Profile.js";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [favRecipes, setFavRecipes] = useState([])

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
  };
  
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const favClick = async (e, recipe) => {
    e.preventDefault();
  /*   const recipe = {
        label: e.target.closest("div").querySelector("h2").textContent,
        image: e.target.closest("div").querySelector("img").getAttribute("src"),
        calories: e.target.closest("div").querySelector("p").textContent,
        viewRecipe: e.target.closest("div").querySelector("a").getAttribute("href")
    } */
    try {
     const res = await axios.post(`${URL}/favorites/add`, {userId: user.id, recipe})
      setFavRecipes(res.data)
      console.log("Response data:", res.data);
      alert("Recipe added to favorites")
      console.log(favRecipes)
      console.log(res.data)
    } catch (e) {
      console.log("error ==>>", e)
    }



    /* setFavRecipes([...favRecipes , recipeData])
    console.log(favRecipes)
    alert("Recipe added to favourites") */
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
        <Route path="/recipes" element={<RecipeList  favRecipes={favRecipes} setFavRecipes={setFavRecipes} handleFavClick={favClick}/>} />
        <Route path="/recipes/:category" element={<RecipeList favClick={favClick} favRecipes={favRecipes} setFavRecipes={setFavRecipes}/>} favClick={favClick}/>
        <Route path="/profile" element={ !isLoggedIn ? (<Navigate to={"/"} />) : (<Profile logout={logout} user={user} favClick={favClick} favRecipes={favRecipes} setFavRecipes={setFavRecipes}/>)} />
      </Routes>
    </Router>
  );
}

export default App;