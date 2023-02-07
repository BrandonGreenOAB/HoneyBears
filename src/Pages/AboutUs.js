import "./AboutUs.css";
import HBNavbar from "./Components/Navbar/HBNavbar";
import Paper from "@mui/material/Paper";
import React from "react";
import { Box } from "@mui/system";

export const AboutUs = () => {
  return (
    <div>
      <HBNavbar />
      <Box
        sx={{
          p: 2,
          bgcolor: "#ffedb3",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "90%",
          borderRadius: "10px",
        }}
      >
        <div className="textAndImgContainer">
          <img className="aboutUsImg" src="./Images/aboutUsPicture.jpg" />
          <div className="aboutUsWrapper">
            <p>
              Honey Bear’s Cupcakery & More opened on July 5th, 2021. It is the
              entrepreneurial adventure of Kim and Jeff Johner, who are new
              Bryson City residents from Cape Coral, Florida.
            </p>
            <p className="2">
              Before becoming cupcake and donut extraordinaires, both Kim and
              Jeff spent the majority of their professional careers in the
              healthcare field. Jeff, as a nuclear medicine technologist, and
              Kim, as a registered nurse who served in patient care and on the
              administrative/managerial side as well.
            </p>
            <p className="3">
              They met in their hometown of Cape Coral in the summer of 2017.
              Wanting to do something different and work together, they started
              talking about career changes. Since healthcare was second nature
              to them both, they decided to invest in a physical therapy
              franchise business and opened two clinics. It went well, but after
              a few years, the pair decided to shift gears again… that business
              wasn’t bringing them the joy they had hoped.
            </p>
            <p className="4">
              The decision to leave their physical therapy business couldn’t
              have timed up better, because that was also in the same time frame
              they discovered Bryson City, North Carolina, and all the charm
              that comes along with it. Kim and Jeff, still living in Florida,
              began to ponder their next steps. And one day, over dinner, Kim
              says, everything changed.
            </p>
            <p className="5">
              “We had dinner with friends of ours in August 2021, and we talked
              about what we could do to bring something new to this cute little
              town we loved called Bryson City. I even remember the meal… Jeff
              had filet mignon and lobster, and I had a pork chop, and there it
              was… the idea of the cupcake shop and the name Honey Bear’s
              Cupcakery - coined by Jeff - was born right there over dinner.”
            </p>
            <p className="6">
              It all started coming together so perfectly that the couple
              decided - on a Wednesday - that it was time to make the move. And
              so they did. Just five days later (the following Sunday), they
              packed their bags (and their house), and Bryson City became their
              new home. They had found a new house and a location for their
              cupcake shop much faster than they expected!
            </p>
            <p className="7">
              New to the cupcake and donut industry, there would be a lot of
              work ahead for their new business. Many months were put into
              planning, designing, and of course tons of BAKING! Then there was
              their location. Kim says, “Nothing was to code in the shop when we
              moved in, and it had a drop ceiling. It’s a 1940s building that
              hadn’t been reno’d in decades. It was a gut job, and the only
              thing original in the shop now is an old wood beam that runs
              through the center of the shop.”
            </p>
            <p className="8">
              During this time, the menu and recipes started to come to life.
              And now the creations abound! The most popular cupcake is the
              Mucky Tuck, appropriately named after the Tuckasegee River that
              runs - literally - through town. It has a vanilla cake and
              chocolate frosting and is adorned with chocolate curls and
              chocolate rocks. And then there’s the Blueberry Ridge Parkway,
              named - you guessed it - after the Blue Ridge Parkway. It has real
              blueberries folded into the cake batter and topped with luscious
              frosting and is also one of the most popular cupcakes.
            </p>
            <p className="9">
              That old wood beam is just one of the many things that make Honey
              Bear’s what it is. The shop is now full of charm and filled with
              lots of sweet treats, coffee drinks, and unique gifts.
            </p>
            <p className="10">
              Whether you come to sit and enjoy or take it to go, the fresh
              roasted coffee, the famous Honey Sweet Tea, the freshly made
              donuts, or one of the many delicious cupcake confections, Honey
              Bear’s Cupcakery is THAT place you just have to experience. It’s
              truly a Smoky Mountain Destination.
            </p>
            <p className="11">
              You’ll feel the love when you walk through the doors, because
              that’s how it all began.
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
};
