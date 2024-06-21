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
import SecretPage from "./containers/SecretPage.js";
import Navbar from "./components/Header/Navbar.js";
import RecipeList from "./components/RecipeList.js"
import { URL } from "./config.js";
import * as jose from "jose";
import ViewCategory from "./views/ViewCategory.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

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

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
 
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/recipes" element={<RecipeList />} />
        
      </Routes>
    </Router>
  );
}

export default App;
