import React from "react";
import { NavLink } from "react-router-dom";

import './style.css';


const Header = () => {
    const handleActiveClass = (params) => {
        return params.isActive ? "active-item" : ""
    }

    return (
        <div className="header">
        <NavLink className={handleActiveClass} to="/">Home</NavLink>
        <br/>
        <NavLink className={handleActiveClass} to="/welcome">Welcome</NavLink>
        <br/>
        <NavLink className={handleActiveClass} to="/products">Products</NavLink>
        <br/>
        <NavLink className={handleActiveClass} to="/profile">Profile</NavLink>
        </div>
    )
};

export default Header;