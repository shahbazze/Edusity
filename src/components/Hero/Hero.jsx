import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/edusity_assets/dark-arrow.png"
function Hero() {
  return (
    <div className="Hero container">
      <div className="hero-text">
        <h1>We Are the Gateway to Knowledge</h1>
        <p>
          Our mission is to connect students with a wealth of information and
          resources. With dedicated educators and innovative technology, we
          offer personalized learning to help every student succeed. Join us to
          explore and excel in your educational journey.
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Hero;
