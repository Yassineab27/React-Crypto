import React from "react";

const CoinHighest = (props) => {
    const UsdHigh = props.coin.USD.HIGH24HOUR;
    const EurHigh = props.coin.EUR.HIGH24HOUR;
    return(
        <div className="Coin-High">
            <h3>Highest Price in the last 24h</h3>
            <h4><i className="fas fa-arrow-circle-up arrow-high"></i> USD</h4>
            <h2>$ {UsdHigh.toFixed(3)}</h2>

            <h4><i className="fas fa-arrow-circle-up arrow-high"></i> EUR</h4>
            <h2>€ {EurHigh.toFixed(3)}</h2>
        </div>
    )
};

export default CoinHighest;