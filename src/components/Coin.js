import React from "react";
import { Link } from "react-router-dom";

const Coin = (props) => {
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
                <button onClick={() => props.add(coin)} className="add-button"><i className="fas fa-plus"></i> Add</button>
                <Link to={`/coins/${coin}/${symbol}`} className="info-button"><i className="fas fa-info"></i> Info</Link>
            </div>
        </div>
    )
};

export default Coin;