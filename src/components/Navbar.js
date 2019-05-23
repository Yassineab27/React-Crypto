import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App/App.css";

const Nav = () => {
    return(
        <nav className="Nav">
            <div className="Nav-container container">
                <Link className="logo" to="/">
                    <h3>React Crypto</h3>
                </Link>
                <ul>
                    <li><NavLink className="nav-link" activeClassName="active-link" to="/coins">Coins</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName="active-link" to="/settings">Settings</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;