import React, { Component } from 'react';
import "./Discover.css";

class Discover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.props.setSignedIn();

    return (

      <div className="discover">
        <br />
        <h1> Discover pace </h1>
      </div>
    )
  }
}


export default Discover;