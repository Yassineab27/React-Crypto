import React, { Component } from "react";
import "../App/App.css";
import Coin from "./Coin";
const cc = require("cryptocompare");

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: null
        }
    };

    componentDidMount() {
        this.fetchCoins()
    };

    fetchCoins = async () => {
        const coins = (await cc.coinList()).Data
        console.log(coins);

        this.setState({
            coins: coins,
            favorites: null
        })
    };

    render() {
        const { coins, favorites } = this.state;
        const coinList = coins ? (
            Object.values(coins).slice(0, 100).map(coin => {
                return <Coin coin={coin.CoinName}
                symbol={coin.Symbol}
                img={coin.ImageUrl}
                key={coin.Id}/>
            }) 
        ) : (
            <h2>Loading..</h2>
        )
        const chooseFav = favorites ? (
            <h3>My favorite Coins</h3>
        ) : (
            <p>Please Choose your Coins</p>
        )
        return(
            <div className="container Dashboard">
                <h1>Dashboard</h1>
                <div className="favorite-coins">
                    {chooseFav}
                </div>
                <div className="dashboard-container">
                    {coinList}
                </div>
            </div>
        )
    };
};

export default Dashboard;