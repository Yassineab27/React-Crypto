import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from '../components/Navbar';
import Home from "../components/Home";
import Coins from "../components/Coins";
import CoinInfo from "../components/CoinData/CoinInfo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="AppLayout">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/coins" component={Coins}/>
          <Route path="/coins/:name/:symbol" component={CoinInfo}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
