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
        <div className="impNavFlex">
          <a href="Pdfs/HBMenu.pdf" target="_blank">
            <Button className="navMenuBtn">Our Menu</Button>
          </a>
          <div>
            <Button onClick={this.comingSoon} className="navMenuBtn">
              Order Online
            </Button>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default HBNavbar;
