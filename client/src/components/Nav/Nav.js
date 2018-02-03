// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Nav = () => (
//   <nav className="navbar navbar-inverse sticky-top">
//     <div className="container-fluid Navigation" id="navigation">

//         <Link to="/discover" className="navbar-brand">
//           Discover
//         </Link>
//       <div className="navbar-header">

//         <Link to="/post" className="navbar-brand">
//           Post
//         </Link>
//         <Link to="/login" className="navbar-brand">
//           Login
//         </Link>
//         <Link to="/Metrics" className="navbar-brand">
//           Metrics
//         </Link>
//         <Link to="/signup" className="navbar-brand">
//           Sign Up
//         </Link>


//       </div>
//     </div>
//   </nav>
// );

// export default Nav;



import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import mainLogo from "./icon-logo.png";
import UserProfile from "./../UserProfile";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Nav extends Component  {

renderContent() {
  switch (this.props.signedIn) {
    case null:
      return (
        <div>
          Loading ...
        </div>
        )
    case false:
      return (
        <div>
          <li><a href="/auth/google">Login with Google</a></li>
        </div>
      )
    default:
      return (
        <div>
          <ul>
          <li><Link to="/post">Post</Link></li>
          <li><UserProfile userInfo={this.props.userInfo}/></li>
          <li><a href="/api/logout">Signout</a></li>
          </ul>
        </div>
      )
  }
}



render() {
  return (
    <div>
      <nav>
        <div className="container-fluid Navigation" id="navigation">
        <ul>
          <li><img src={mainLogo} alt="logo" /></li>
          <li><Link className="navbar-brand" to="/">CAPTIONLIZED</Link></li>
          <li><Link to="/"> Discover </Link></li>

         <div>
           {this.renderContent()}
         </div>

        </ul>
        </div>
      </nav>
    </div >
  )
 }
};

export default Nav;
