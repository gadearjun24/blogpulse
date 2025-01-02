import React from "react";
import "./FeatureSlider.css";

import image from "../../assets/images/logo.png";

function FeatureSlider() {
  return (
    <>
      <div className="main-container">
        <div className="slider">
          <div className="slide">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSlider;
