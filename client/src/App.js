import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from 'axios';


import "./App.css";
import Discover from "./pages/Discover";
import Metrics from "./pages/Metrics";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Signout from "./pages/Signout";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import ImgList from './components/ImgList';
import SearchForm from './components/SearchForm';


const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Discover} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/metrics" component={Metrics} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/signout" component={Signout} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;


export default App;
