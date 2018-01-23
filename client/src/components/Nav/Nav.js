// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Nav = () => (
//   <nav className="navbar navbar-inverse sticky-top">
//     <div className="container-fluid Navigation" id="navigation">
//       <div className="navbar-header">

//         <Link to="/discover" className="navbar-brand">
//           Discover
//         </Link>

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



import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import mainLogo from "./icon-logo.png";
import UserProfile from "./../UserProfile";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props =>
  <nav>
    <div className="container-fluid Navigation" id="navigation">  
      <ul>
        <li> 
          <img src={mainLogo} />
        </li>

        <li>  
        <Link className="navbar-brand" to="/">
          PostPin
        </Link>
        </li>
        <li>
          <Link to="/">Discover</Link>
        </li>
        <li
          className={window.location.pathname === "/post" ? "active" : ""}>
          <Link to="/post">Post</Link>
        </li>
        <li className={window.location.pathname === "/login" ? "active" : ""}>
          <Link to="/login">Login</Link>
        </li>
        <li className={window.location.pathname === "/metrics" ? "active" : ""}>
          <Link to="/metrics">Metrics</Link>
        </li>

        <li className="rightAdjust">
          <UserProfile />
        </li>
        <li className="rightAdjust" className={window.location.pathname === "/signout" ? "active" : ""} id="signout">
          <Link to="/signout">Signout</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Nav;
