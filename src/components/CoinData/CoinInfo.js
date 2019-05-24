import React, { Component } from "react";
import CoinPrice from "./CoinPrice";
import CoinImg from "./CoinImg";
import "../../App/App.css";

const cc = require("cryptocompare");

class CoinInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: null
        }
    };

    componentDidMount() {
        this.fetchPrice()
    };

    fetchPrice = async () => {
        try {
            const { symbol } = this.props.match.params;
            const coinInfo = await cc.priceFull(symbol, ['USD', 'EUR']);
            this.setState({
                coin: coinInfo
            });
            console.log(this.state.coin["365"].USD.TOSYMBOL)
            console.log(Object.values(this.state.coin)[0])
        }
        catch(err) {
            console.log("Error: ", err)
        }
    };

    render() {
        const { name } = this.props.match.params;
        const { symbol } = this.props.match.params;
        const { coin } = this.state;

        const coinPrice = coin ? (
            <React.Fragment>
                <CoinImg coin={coin[symbol].USD}/>
                <CoinPrice coin={coin[symbol].USD}/>
                <CoinPrice coin={coin[symbol].EUR}/>
            </React.Fragment>
        ) : (
            <h2>Loading</h2>
        )

        return(
            <div className="Dashboard Coin-dashboard">
                <h1>{name}  (<small>{symbol}</small>)</h1>
                <div className="Coin-info">
                    { coinPrice }
                </div>
            </div>
        )
    };
};

export default CoinInfo;