import React from "react";
import Slider from "react-slick";
import HeroImages from "./HeroImages";
import { NavLink } from "react-router-dom";
const Hero = () => {
  const Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pouseOnFocus: true,
  };

  return (
    <div className="hero-section">
      {/* background - pattern */}
      <div className="cursive-bg"></div>
      {/* hero section */}
      <div className="container">
        {/* here add stider for hero section image slider     ==== */}
        <Slider {...Settings}>
          {HeroImages.map((curElem) => {
            return (
              <div key={curElem.id}>
                <div className="box">
                  {/* text content section  */}
                  <div style={{ margin: "auto" }}>
                    <h1 className="hero-h1">{curElem.title}</h1>
                    <p className="hero-p">{curElem.description}</p>
                    <div>
                      <button className="hero-order-btn">
                        <NavLink className="t-view-link" to="All">
                          Order Now
                        </NavLink>
                      </button>
                    </div>
                  </div>
                  {/* img content section  */}
                  <div>
                    <div>
                      <img className="box-img" src={curElem.img} alt="banner" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
