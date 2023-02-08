import React from "react";
import HBNavbar from "./Components/Navbar/HBNavbar";
import "./FindUs.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { border } from "@mui/system";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const FindUs = () => {
  const data = [
    {
      time: "9 AM - 4 PM",
      day: "Sunday 2/12",
    },
    {
      time: "7 AM - 4 PM",
      day: "Monday 2/13",
    },
    {
      time: "7 AM - 5:30 PM",
      day: "Tuesday (Valentine's Day)",
    },
    {
      time: "9 AM - 9 PM",
      day: "Today",
    },
    {
      time: "7 AM - 4 PM",
      day: "Thursday 2/9",
    },
    {
      time: "7 AM - 5 PM",
      day: "Friday 2/10",
    },
    {
      time: "8 AM - 5 PM",
      day: "Saturday 2/11",
    },
  ];
  const listData = data.map((a) => (
    <ListItem>
      <ListItemIcon>
        <CalendarMonthIcon style={{ color: "#af4281" }} />
      </ListItemIcon>
      <ListItemText style={{ color: "#af4281", textAlign: "left" }}>
        {" "}
        {a.day}: {a.time}
      </ListItemText>
    </ListItem>
  ));
  return (
    <div>
      <HBNavbar />
      <div className="findUs">
        <Grid container spacing={2}>
          <Grid
            style={{
              color: "#af4281",
              display: "flex",
              justifyContent: "center",
            }}
            item
            xs={12}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.026673641326!2d-83.44840028439262!3d35.42936925135039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859494f197ab667%3A0xeb63e93120daf1ac!2sHoney%20Bear&#39;s%20Cupcakery%20%26%20More!5e0!3m2!1sen!2sus!4v1669933922002!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
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
          md={6}
        >
          <Typography
            sx={{ mt: 4, mb: 2, color: "#af4281" }}
            variant="h6"
            component="div"
          >
            Hours of Operation
          </Typography>
          <div>
            <List>{listData}</List>
          </div>
        </Grid>
      </div>
    </div>
  );
};
