import React, { Component } from "react";
import HoneyBearsMenu from "./Components/HoneyBearsMenu";
import mainLogo from "../Images/MainLogoSmall.jpg";
import cautionTape from "../Images/CautionTape2.png";

class Home extends Component {
  render() {
    return (
      <div class="dashboardbackgrnd">
        <HoneyBearsMenu />
        <div class="mainLogoWrapper">
        <img class="mainLogo" src={mainLogo} />
        <div class="motoTextWrapper">
        <h1 id="ogMoto" class="moto">Sweeter Than The Average Bear</h1>
        <h1 id="motoExtra" class="moto">Store and Site Coming Soon!</h1>
        </div>


        <div class="cautionTapeTripleWrapper">
        <img class="cautionTape" src={cautionTape} />
        <img class="cautionTape" src={cautionTape} />
        <img class="cautionTape" src={cautionTape} />
        </div>


        </div>
      </div>
    );
  }
}

export default Home;
