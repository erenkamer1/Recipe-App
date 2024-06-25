import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const linkStyles = {
    textDecoration: "none",
    color: "blue",
    marginRight: "10px",
    cursor: "pointer",
  };

  const activeLinkStyles = {
    color: "white",
    fontWeight: "bold",
    cursor: "pointer", 
  };

  return (
    <div className="navbar">
        <NavLink to="/" style={({isActive}) => 
        ( isActive ? activeLinkStyles : linkStyles)}>
        Home
      </NavLink>
      
      {isLoggedIn === false && (
        <>
        <NavLink to="/register"   style={({isActive}) => 
        ( isActive ? activeLinkStyles : linkStyles)}>
            Register
          </NavLink>
           <NavLink to="/login"   style={({isActive}) => 
        ( isActive ? activeLinkStyles : linkStyles)}>
            Login
          </NavLink>
        </>
      )}

        <NavLink to="/secret-page"  style={({isActive}) => 
        ( isActive ? activeLinkStyles : linkStyles)}>
        Secret
      </NavLink>
      
      <NavLink to="/recipes"   style={({isActive}) => 
        ( isActive ? activeLinkStyles : linkStyles)}>
        Recipes
      </NavLink>

      <NavLink to={"/profile"} style={({isActive}) => (
        isActive ? activeLinkStyles : linkStyles)}>
          Profile
          </NavLink>
      
      
    </div>
  );
};

export default Navbar;
