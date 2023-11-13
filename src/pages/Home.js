import React from "react";
import camera from "../Images/camera.png";
import "../App.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome</h1>
      <h2>This is where I kept all of my photo collection.</h2>
      <img src={camera} alt="camera" className="homePic" />
    </div>
  );
};

export default Home;
