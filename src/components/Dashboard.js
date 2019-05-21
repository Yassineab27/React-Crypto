import React, { Component } from "react";
import "../App/App.css";
import Coin from "./Coin";
import Favorite from "./Favorite";
const cc = require("cryptocompare");

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: null,
            favorites: null
        }
    };

    componentDidMount() {
        this.fetchCoins()
    };

    fetchCoins = async () => {
        const coins = (await cc.coinList()).Data;

        this.setState({
            coins: coins,
            favorites: {}
        })
    };

    addCoin = (name) => {
        this.setState(prevState => {
            return {
                favorites: {...prevState.favorites, name}
            }
        });
        console.log(this.state.favorites)
    };

    render() {
        const { coins, favorites } = this.state;
        const coinList = coins ? (
            Object.values(coins).slice(0, 100).map(coin => {
                return <Coin coin={coin.CoinName}
                symbol={coin.Symbol}
                img={coin.ImageUrl}
                add={this.addCoin}
                key={coin.Id}/>
            }) 
        ) : (
            <h2>
                <i className="fas fa-spinner fa-spin"></i>
            </h2>
        )
        const chooseFav = favorites ? (
            Object.values(favorites).map(favCoin => {
                return <Favorite coin={favCoin.CoinName}
                symbol={favCoin.Symbol}
                img={favCoin.ImageUrl}
                key={favCoin.Id}/>
            }) 
        ) : (
            <p>Please Choose Your Favortie Coins</p>
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