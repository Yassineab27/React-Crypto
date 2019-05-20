import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from '../components/Navbar';
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import Settings from "../components/Settings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="AppLayout">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/settings" component={Settings}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
