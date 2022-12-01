import React from "react";
import ReactPlayer from "react-player/file";
import "./responsivePlayer.css";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper player-small-wrapper">
      <ReactPlayer
        className="react-player"
        url="Videos/brysoncityXMAS.mp4"
        width="1280px"
        height="720px"
        controls={true}
        loop={true}
        volume={0.5}
      />
    </div>
  );
};

export default ResponsivePlayer;
