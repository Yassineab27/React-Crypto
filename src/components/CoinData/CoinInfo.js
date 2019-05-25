import React, { Component } from "react";
import CoinPrice from "./CoinPrice";
import CoinImg from "./CoinImg";
import CoinHighest from "./CoinHighest";
import CoinLowest from "./CoinLowest";
import HighCharts from "./HighCharts";
import moment from "moment";
import "../../App/App.css";

const cc = require("cryptocompare");

class CoinInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: null,
            history: null
        }
    };

    componentDidMount() {
        this.fetchPrice();
        this.fetchHistorical();
    };

    fetchPrice = async () => {
        try {
            const { symbol } = this.props.match.params;
            const coinInfo = await cc.priceFull(symbol, ['USD', 'EUR']);
            this.setState({
                coin: coinInfo
            });
        }
        catch(err) {
            console.log("Error: ", err)
        }
    };

    fetchHistorical = async () => {
        const { symbol } = this.props.match.params;
        const result = [];


        for(let num = 12; num > 0; num--) {
            const date = moment().subtract(num, "months")._d;
            try {
                const historical = await cc.priceHistorical(symbol, ['USD', "EUR"], date);
                result.push(historical);
            }
            catch(err) {
                 console.log("Error: ", err)
            }
        }

        const history = [
            {
                name: "USD",
                data: result.map((price, index) => {
                    return [moment().subtract(12 - index, "months")._d.valueOf,
                    price.USD]
                })
            }, {
                name: "EUR",
                data: result.map((price, index) => {
                    return [moment().subtract(12 - index, "months")._d.valueOf,
                    price.EUR];
                })
            }
        ]

        this.setState({ history });
    }

    render() {
        const { name } = this.props.match.params;
        const { symbol } = this.props.match.params;
        const { coin, history } = this.state;

        const coinPrice = coin && history ? (
            <React.Fragment>
                <CoinImg coin={coin[symbol].USD} name={name}/>
                <CoinPrice coin={coin[symbol].USD}/>
                <CoinPrice coin={coin[symbol].EUR}/>
                <CoinHighest coin={coin[symbol]}/>
                <CoinLowest coin={coin[symbol]}/>
                <HighCharts history={history}/>
            </React.Fragment>
        ) : (
            <h2><i className="fas fa-spinner fa-spin"></i></h2>
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