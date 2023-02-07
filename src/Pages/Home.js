import React, { Component } from "react";
import HBNavbar from "./Components/Navbar/HBNavbar";

class Home extends Component {
  render() {
    return (
      <div className="dashboardbackgrnd">
        <HBNavbar className="HBNavigation" />
        <div className="desktop"></div>
        <div className="tablet"></div>
        <div className="mobile"></div>
      </div>
    );
  }
}

export default Home;
