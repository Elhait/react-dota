import React from "react";
import "./Header.sass";
import logo from"../../media/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="logo"/>
                <span>Drink vodka, Play Dotka</span>
            </Link>
            <nav>
                <Link to="/" className="link">Home</Link>
            </nav>
            
        </header>
    );
}

export default Header;
