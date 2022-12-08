import React from "react";
import { useState } from "react";
import "./ImageSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 4500);
  });

  const slideRight = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
      console.log(current);
    }
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div
      className="slider"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="slider_wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "slider_card slider_card-active"
                  : "slider_card"
              }
            >
              <img className="card_image" src={image.imageUrl} />
              <div className="card_overlay">
                <h2 className="card_title">{image.title}</h2>
              </div>
            </div>
          );
        })}

        <div onClick={slideLeft} className="slider_arrow_left">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div onClick={slideRight} className="slider_arrow_right">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>

        <div className="slider_pagination">
          {/* this map is passing the index for the current state in order to add the active state depending on which pager is selected*/}
          {images.map((_, index) => {
            return (
              <FontAwesomeIcon
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
                icon={faCircle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
