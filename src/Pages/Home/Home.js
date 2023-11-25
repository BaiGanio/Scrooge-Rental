import React from "react";
import truck from "../../assets/images/Pickup-Truck-Tesla.jpg";
import "./Home.css";

export default function Home() {

  return (
    <div className="Home">
        <div className="lander">
        <br />
        <h1>Welcome to Scrooge Rental</h1>
        <img src={truck} className="Home-image" alt="Truck" />
        <p>The best place in the world for renting Tesla (& not only!) EVs... with just few clicks ;)</p>
      </div>
    </div>
  );
}
