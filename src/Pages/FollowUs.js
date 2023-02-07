import React from "react";
import { Box } from "@mui/system";
import { SocialIcon } from "react-social-icons";
import HBNavbar from "./Components/Navbar/HBNavbar";
import "./FollowUs.css";

export const FollowUs = () => {
  return (
    <div className="followUsBackground">
      <HBNavbar />
      <Box
        className="socialsBox"
        sx={{
          p: 0,
          bgcolor: "#ffedb3",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "85%",
        }}
      >
        <div className="socials">
          <h2 className="followUs">Follow Us!</h2>
          <div className="socialsIconContainer">
            <SocialIcon
              className="socialIcon"
              url="https://www.facebook.com/Honey-Bears-Cupcakery-103388455631378"
            />
            <SocialIcon
              className="socialIcon"
              url="https://instagram.com/honeybearscupcakery"
            />
            <SocialIcon
              className="socialIcon"
              url="https://twitter.com/honeybearsNC"
            />
            <SocialIcon
              className="socialIcon"
              url="https://www.tripadvisor.com/Restaurant_Review-g48984-d24073485-Reviews-Honey_Bear_s_Cupcakery_More-Bryson_City_North_Carolina.html?m=19905"
            />
            <SocialIcon
              className="socialIcon"
              url="https://www.yelp.com/biz/honey-bears-cupcakery-bryson-city"
            />
          </div>
        </div>
      </Box>
    </div>
  );
};
