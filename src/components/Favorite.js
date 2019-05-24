import React from "react";
import { Link } from "react-router-dom";
import "../App/App.css";

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
                <Link to={`/coins/${coin}/${symbol}`} className="info-button"><i className="fas fa-info"></i> Info</Link>
                <button onClick={() => props.delete(coin)} className="add-button"><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    )
};

export default Favorite;