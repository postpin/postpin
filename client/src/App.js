import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Discover from "./pages/Discover";
import Metrics from "./pages/Metrics";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Signout from "./pages/Signout";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


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
