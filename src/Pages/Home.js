import React, { Component } from "react";
import HBNavbar from "./Components/Navbar/HBNavbar";
import { cupcakes } from "./Components/ImageSlider/SliderData";
import ResponsivePlayer from "./Components/ResponsivePlayer/ResponsivePlayer";
import Grid from "@mui/material/Grid";

class Home extends Component {
  render() {
    return (
      <div className="dashboardbackgrnd">
        <HBNavbar className="HBNavigation" />
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
          item
          xs={12}
          md={12}
        >
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            item
            xs={12}
            md={12}
          >
            <h2 className="welcome">
              Bryson City voted best city in NC for Christmas 2022!
            </h2>
          </Grid>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
              justifyContent: "space-around",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
            item
            xs={12}
            md={12}
          >
            <ResponsivePlayer className="videoPadding" />
          </Grid>
          <Grid
            style={{
              display: "flex",
              position: "relative",
            }}
            item
            xs={12}
            md={12}
          >
            <h2 className="welcome2">Come take a drive with us and see why!</h2>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
