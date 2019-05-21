import React from "react";

const Favorite = (props) => {
    const { coin, symbol, img } = props;
    return(
        <div className="Coin">
            <div className="Coin-titles">
                <h3>{coin}</h3>
                <p>{symbol}</p>
            </div>
            <div>
                <img alt={coin} src={`http://cryptocompare.com/${img}`}/>
            </div>
            <div>
                <button onClick={() => props.add(coin)} className="add-button"><i className="fas fa-minus"></i> Add</button>
                <button className="info-button"><i className="fas fa-info"></i> Info</button>
            </div>
        </div>
    )
};

export default Favorite;