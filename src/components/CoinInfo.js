import React, { Component } from "react";
import "../App/App.css";

const cc = require("cryptocompare");

class CoinInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinPrice: {}
        }
    };

    componentDidMount() {
        this.fetchPrice()
    };

    // fetchCoin = async () => {
    //     const coin = (await cc.coinList()).Data;
    //     console.log(coin)
    // }

    fetchPrice = async () => {
        try {
            const { symbol } = this.props.match.params;
            const coinData = await cc.priceFull(symbol, ['USD', 'EUR']);
            console.log(coinData);
            this.setState({
                coin: coinData
            })
        }
        catch(err) {
            console.log("Error: ", err)
        }
    };

    render() {
        const { name } = this.props.match.params;
        const { symbol } = this.props.match.params;
        return(
            <div className="Dashboard">
                <h1>{name}</h1>
                <h3>{symbol}</h3>
            </div>
        )
    };
};

export default CoinInfo;