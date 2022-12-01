import React, { Component } from "react";
import HBNavbar from "./Components/Navbar/HBNavbar";
import { cupcakes } from "./Components/ImageSlider/SliderData";
import ResponsivePlayer from "./Components/ResponsivePlayer/ResponsivePlayer";

class Home extends Component {
  render() {
    return (
      <div className="dashboardbackgrnd">
        <HBNavbar className="HBNavigation" />
        <div className="dashboardContainer">
          <h2 className="welcome">
            Bryson City voted best city in NC for Christmas 2022!
          </h2>
          <ResponsivePlayer className="videoPadding" />
          <h2 className="welcome2">Come take a drive with us and see why!</h2>
        </div>
      </div>
    );
  }
}

export default Home;
