import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Discover from "./pages/Discover";
import Comments from "./pages/Comments";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Signout from "./pages/Signout";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import API from './utils/API';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      userInfo: {}
    };

    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    API.getCurrentUser()
      .then(res => {
        if (res.data) {
          this.setState({
            signedIn: true,
            userInfo: res.data
           });
        } else {
          this.setState({ signedIn: false });
        }
      })
      .catch(err => console.log(err)
      );
  }

  render() {

    return (
      <Router>
        <div>
          <Nav userInfo={this.state.userInfo} signedIn={this.state.signedIn}/>
          {/* <Switch> */}
          {/* <Route exact component={NoMatch} /> */}
          <Route exact path="/" component={Discover} />
          <Route exact path="/discover" component={Discover}/>
          <Route exact path="/comments" component={Comments} userInfo={this.state.userInfo}/>
          <Route exact path="/login" component={Login} />
          <Route path="/posts/:id/comments" component={Comments} />
          <Route path="/posts" component={Post} />
          <Route exact path="/signout" component={Signout} />
          <Route exact path="/signup" component={Signup} />
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

// const App = () =>
//   <Router>
//     <div>

//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Discover} />
//         <Route exact path="/discover" component={Discover} />
//         <Route exact path="/Comments" component={Comments} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/post" component={Post} />
//         <Route exact path="/signout" component={Signout} />
//         <Route exact path="/signup" component={Signup} />
//          <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>;


export default App;
