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
            filtredList: [],
            favorites: [],
            search: ""
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

    // ==========================================================================================================
    // Adding Coin to fav
    // ==========================================================================================================

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
    };

    // ==========================================================================================================
    // Deleting Coin from fav
    // ==========================================================================================================


    deleteCoin = (favCoin) => {
        this.setState(prevState => {
            const newFavList = prevState.favorites.filter(fav => {
                return fav.CoinName !== favCoin
            });
            return {
                favorites: newFavList
            }
        });

        // alert(`${favCoin} was successfully deleted!`);
    };

    // ==========================================================================================================
    // HANDING INPUT
    // ==========================================================================================================

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        }, () => this.filterCoins());
    };

    filterCoins = () => {
        const { coins, search } = this.state;
        const filtredCoins = Object.values(coins).slice(0, 100).filter(coin => {
            return coin.CoinName.toLowerCase().includes(search.toLowerCase())
        })

        this.setState({
            filtredList: filtredCoins
        }, () => {
            this.clearFilter();
        });
    };

    clearFilter = () => {
        const { search } = this.state;
        this.setState(() => {
            if(!search) {
                return {
                    filtredList: []
                }
            }
        });
    }
    // ==========================================================================================================
    // Rendering
    // ==========================================================================================================

    render() {

        // ==========================================================================================================
        // Rendering Coins
        // ==========================================================================================================

        const { coins, favorites, filtredList } = this.state;
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

        // ==========================================================================================================
        // Rendering Filtred Coins
        // ==========================================================================================================
        
        const filtred = filtredList.slice(0, 100).map(coin => {
                return <Coin coin={coin.CoinName}
                symbol={coin.Symbol}
                img={coin.ImageUrl}
                add={this.addCoin}
                key={coin.Id}/>
            })

        // ==========================================================================================================
        // Rendering Favorite Coins
        // ==========================================================================================================

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

        // ==========================================================================================================
        // Return
        // ==========================================================================================================

        return(
            <div className="container Dashboard">
                <h1>Dashboard</h1>
                <div className={this.state.coins && "coins-list form"}>
                    <label className={this.state.coins ? "" : "hidden-label"}
                    id="search">Search for coins: </label>
                    <input type="text"
                    htmlFor="search"
                    className={this.state.coins ? "" : "hidden-input"}
                    placeholder="ex: Bitcoin..."
                    value={this.state.search}
                    onChange={this.handleChange}/>
                    <div className="dashboard-container">
                        {filtred}
                    </div>
                </div>
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