import React from "react";
import "./style.css";


const NavBar = () => {
    return(
        <div className="navbar">
            <img  id="logo" src="https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg" alt="Logo"/>
            <a href="/home">Home</a>
            <a href="/">Products</a>
            <a href="/login">Login</a>
        </div>

    );

};

export default NavBar;