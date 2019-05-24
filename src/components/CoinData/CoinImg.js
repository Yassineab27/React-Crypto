import React from "react";

const CoinImg = (props) => {
    const { IMAGEURL } = props.coin;
    const { name } = props;

    return(
        <div className="Coin-img">
            <h2>{name}</h2>
            <img src={`http://cryptocompare.com/${IMAGEURL}`} alt={name}/>
        </div>
    )
};

export default CoinImg;