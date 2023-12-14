import React from "react";

//include images into your bundle

import Navbar from "../navbar";
import Carousel from "./carousel";
import Footer from "./footer";
import NavTabs from "./navtabs";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <NavTabs />
      <Footer />
    </div>
  );
};

export default Home;
