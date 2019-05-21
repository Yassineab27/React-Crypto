import React from "react";

const Coin = (props) => {
    const { coin, symbol } = props;
    return(
        <div className="Coin">
            <h3>{coin}</h3>
            <p>{symbol}</p>
        </div>
    )
};

export default Coin;