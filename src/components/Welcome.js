import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return(
        <div className="container">
            <h1>Welcome to React Crypto</h1>
            <p>Please select your favorite coins.</p>
            <Link to="/dashboard">
                <button>Select Coins</button>
            </Link>
        </div>
    )
};

export default Welcome;