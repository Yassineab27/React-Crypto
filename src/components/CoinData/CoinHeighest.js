import React from "react";

const CoinHeighest = (props) => {
    const UsdHeigh = props.coin.USD.HIGH24HOUR;
    const EurHeigh = props.coin.EUR.HIGH24HOUR;
    return(
        <div className="Coin-Heigh">
            <h3>Highest Price in the last 24h</h3>
            <h4><i className="fas fa-arrow-circle-up arrow-heigh"></i> USD</h4>
            <h2>$ {UsdHeigh.toFixed(3)}</h2>

            <h4><i className="fas fa-arrow-circle-up arrow-heigh"></i> EUR</h4>
            <h2>€ {EurHeigh.toFixed(3)}</h2>
        </div>
    )
};

export default CoinHeighest;