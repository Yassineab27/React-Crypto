import React from "react";

const CoinImg = (props) => {
    const { TOSYMBOL, PRICE } = props.coin;
    return(
        <div className="Coin-price">
            <h4>{TOSYMBOL}</h4>
            <h2>{PRICE.toFixed(5)}</h2>
        </div>
    )
};

export default CoinImg;