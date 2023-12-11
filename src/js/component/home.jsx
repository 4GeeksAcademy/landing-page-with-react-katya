import React from "react";

//include images into your bundle
import Jumbotron from "./jumbotron";
import Navbar from "../navbar";
import Card from "./card";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div class="d-flex justify-content-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
