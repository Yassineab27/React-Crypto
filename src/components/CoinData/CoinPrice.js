import React from "react";

const CoinPrice = (props) => {
    const { TOSYMBOL, PRICE, CHANGEPCT24HOUR } = props.coin;
    const symbol = TOSYMBOL === "USD" ? "$" : "€";
    return(
        <div className="Coin-price">
            <h4>{TOSYMBOL}</h4>
            <h3>{CHANGEPCT24HOUR.toFixed(3)}</h3>
            <h2>{symbol} {PRICE.toFixed(3)}</h2>
        </div>
    )
};

export default CoinPrice;