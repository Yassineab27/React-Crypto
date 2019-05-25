import React, { Component } from "react";
import CoinPrice from "./CoinPrice";
import CoinImg from "./CoinImg";
import CoinHighest from "./CoinHighest";
import CoinLowest from "./CoinLowest";
import HighCharts from "./HighCharts";
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
                <CoinImg coin={coin[symbol].USD} name={name}/>
                <CoinPrice coin={coin[symbol].USD}/>
                <CoinPrice coin={coin[symbol].EUR}/>
                <CoinHighest coin={coin[symbol]}/>
                <CoinLowest coin={coin[symbol]}/>
                <HighCharts />
            </React.Fragment>
        ) : (
            <h2>Loading</h2>
        )

        return(
            <div className="Dashboard container CoinInfo">
                <h1>{name}  (<small>{symbol}</small>)</h1>
                <div className="Coin-info">
                    { coinPrice }
                </div>
            </div>
        )
    };
};

export default CoinInfo;