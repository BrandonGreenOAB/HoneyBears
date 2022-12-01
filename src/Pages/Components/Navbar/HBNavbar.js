import React, { Component } from "react";
import { Button } from "../Buttons";
import { HBMenuItems } from "./HBMenuItems";
import "./HBNavbar.css";
import { Navigate } from "react-router-dom";

class HBNavbar extends Component {
  state = { active: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="HBLogoImageContainer">
          <img src="/Images/HBL3547_1313.jpg" className="HBLogoImage" />
          {/* <h1 className="HBLogo">Honey Bears Cupcakery</h1> */}
        </div>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {HBMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.className} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <a href="Pdfs/HBMenu.pdf" target="_blank">
            <Button className="navMenuBtn">Menu</Button>
          </a>
          <a
            href="https://www.toasttab.com/honey-bears-cupcakery-c-o-kim-johner-7-martin-st"
            target="_blank"
          >
            <Button className="navMenuBtn">Order Online</Button>
          </a>
        </div>
      </nav>
    );
  }
}

export default HBNavbar;
