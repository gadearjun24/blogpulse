import React, { useState } from "react";
import FeatureSlider from "../../components/FeatureSlider/FeatureSlider";
import BlogCategories from "../../components/BlogCategories/BlogCategories";

function Home() {
  const categorires = [
    "sports",
    "entertainment",
    "health",
    "travel",
    "fashion",
  ];

  return (
    <>
      <FeatureSlider />
      <BlogCategories categorires={categorires} />
    </>
  );
}

export default Home;
