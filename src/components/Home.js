import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return(
            <div className="Home">
                <div className="container home-container">
                    <div className="Welcome">
                        <h1>Welcome to React Crypto</h1>
                        <h3>Best Crypto Site Ever</h3>
                        <div className="Select">
                            <p>Track Your Favorite Coins with Ease</p>
                            <Link to="/dashboard">
                                <button>Select Coins</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Home;