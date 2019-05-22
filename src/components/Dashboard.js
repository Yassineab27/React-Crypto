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
            favorites: [],
        }
    };

    componentDidMount() {
        this.fetchCoins()
    };

    fetchCoins = async () => {
        const coins = (await cc.coinList()).Data;

        this.setState({
            coins: coins,
        })
    };

    addCoin = (favCoin) => {
        const { coins, favorites } = this.state;

        const fav = favorites.find(f => {
            return f.CoinName === favCoin
        });

        if(fav) {
            return alert("This coin is already in your favorites list!")
        }

        const newCoin = Object.values(coins).find(coin => {
            return coin.CoinName === favCoin;
        });

        this.setState({
            favorites: [...favorites, newCoin]
        });
        
        alert(`${newCoin.CoinName} was added to the favorites!`);
    };

    deleteCoin = (favCoin) => {
        this.setState(prevState => {
            const newFavList = prevState.favorites.filter(fav => {
                return fav.CoinName !== favCoin
            });
            return {
                favorites: newFavList
            }
        });
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
        const chooseFav = favorites.length ? (
            favorites.map(favCoin => {
                return <Favorite coin={favCoin.CoinName}
                symbol={favCoin.Symbol}
                img={favCoin.ImageUrl}
                delete={this.deleteCoin}
                key={favCoin.Id}/>
            }) 
        ) : (
            <p className={coins ? "" : "hidden-text"}>Please Choose Your Favortie Coins.</p>
        )
        return(
            <div className="container Dashboard">
                <h1>Dashboard</h1>
                <div className={this.state.favorites.length ? "coins-list" : "hidden"}>
                    <h2>My favorite coins</h2>
                    <div className={this.state.favorites.length && "favorite-coins"}>
                        {chooseFav}
                    </div>
                </div>
                <div className={this.state.coins && "coins-list"}>
                    <h2 className={this.state.coins ? "" : "hidden-title"}>Coins List</h2>
                    <div className="dashboard-container">
                        {coinList}
                    </div>
                </div>
            </div>
        )
    };
};

export default Dashboard;