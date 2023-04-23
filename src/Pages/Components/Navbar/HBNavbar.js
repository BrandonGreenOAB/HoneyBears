import React, { Component } from "react";
import { Button } from "../Buttons";
import { HBMenuItems } from "./HBMenuItems";
import "./HBNavbar.css";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class HBNavbar extends Component {
  state = { active: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  comingSoon = () =>
    toast("🧁 Coming next season!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  render() {
    return (
      <nav className="NavbarItems">
        <div className="HBLogoImageContainer">
          {/* // HBL3547_1313.jpg */}
          <img src="/Images/MedallionTransparent.png" className="HBLogoImage" />
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
        <div className="impNavFlex">
          <a href="Pdfs/HBMenus.pdf" target="_blank">
            <Button className="navMenuBtn Btn">Our Menu</Button>
          </a>
          <div>
            <a
              target="_blank"
              href="https://honey-bears-cupcakery.myshopify.com"
            >
              <Button className="navMenuBtn">Online Store</Button>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default HBNavbar;
