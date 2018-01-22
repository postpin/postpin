// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Nav = () => (
//   <nav className="navbar navbar-inverse sticky-top">
//     <div className="container-fluid">
//       <div className="navbar-header">

//         <Link to="/discover" className="navbar-brand">
//            Discover
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
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          PostPin
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" || window.location.pathname === "/discover" ? "active" : ""}>
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
        <li className={window.location.pathname === "/signout" ? "active" : ""}>
          <Link to="/signout">Signout</Link>
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Nav;
