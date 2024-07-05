import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const linkStyles = {
    textDecoration: "none",
    color: "green",
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

      
      <NavLink to="/explore"   style={({isActive}) => 
        ( isActive ? activeLinkStyles : linkStyles)}>
        Explore
      </NavLink>

      <NavLink to={"/profile"} style={({isActive}) => (
        isActive ? activeLinkStyles : linkStyles)}>
          Profile
          </NavLink>

          <NavLink to={"/shopping-list"} style={({isActive}) => (
        isActive ? activeLinkStyles : linkStyles)}>
          Shopping List
          </NavLink>
      
      
    </div>
  );
};

export default Navbar;
