import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 450, clear: 'both',
  backgroundImage: "url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-0.3.5&s=e20bc3d490c974d9ea190e05c47962f5&auto=format&fit=crop&w=934&q=80)" }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
