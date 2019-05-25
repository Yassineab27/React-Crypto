import React from "react";

const CoinLowest = (props) => {
    const UsdHeigh = props.coin.USD.LOW24HOUR;
    const EurHeigh = props.coin.EUR.LOW24HOUR;
    return(
        <div className="Coin-Low">
            <h3>Lowest Price in the last 24h</h3>
            <h4><i className="fas fa-arrow-circle-down arrow-low"></i> USD</h4>
            <h2>$ {UsdHeigh.toFixed(3)}</h2>

            <h4><i className="fas fa-arrow-circle-down arrow-low"></i> EUR</h4>
            <h2>€ {EurHeigh.toFixed(3)}</h2>
        </div>
    )
};

export default CoinLowest;