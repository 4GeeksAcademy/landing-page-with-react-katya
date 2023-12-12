import React from "react";

//include images into your bundle
import Jumbotron from "./jumbotron";
import Navbar from "../navbar";
import Card from "./card";
import Footer from "./footer";
import NavTabs from "./navtabs";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />

      <Jumbotron />
      <NavTabs />
      <div class="container-fluid d-flex flex-column align-items-center justify-content-center mt-5">
        <div class="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div class="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
