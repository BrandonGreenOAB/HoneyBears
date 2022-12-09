import React from "react";
import "./responsivePlayer.css";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper player-small-wrapper">
      {/* <ReactPlayer
        className="react-player"
        url="Videos/brysoncityXMAS.mp4"
        controls={true}
        loop={true}
        volume={0.5}
      /> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/E4mxJNtelHI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default ResponsivePlayer;
