import React from "react";

const CoinPrice = (props) => {
    const { TOSYMBOL, PRICE, CHANGEPCT24HOUR } = props.coin;
    const symbol = TOSYMBOL === "USD" ? "$" : "€";
    return(
        <div className="Coin-price">
            <h4>{TOSYMBOL}</h4>
            <h3 className={CHANGEPCT24HOUR < 0 ? "Coin-price-neg" : "Coin-price-pos"}>{CHANGEPCT24HOUR.toFixed(3)} % (last 24h)</h3>
            <h2>{symbol} {PRICE.toFixed(3)}</h2>
        </div>
    )
};

export default CoinPrice;