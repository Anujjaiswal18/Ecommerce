import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="banner-b">
      <div className="content">
        {/* img */}

        <img 
        data-aos="zoom-in"
        src="images/productsImages/p3.jpeg" alt="banner" />

        {/* body */}
        <div className="banner-body">
          <h1
          data-aos="fade-up"
          >Summer Sale Up To 50% Off</h1>
          <p
          data-aos="fade-up"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            doloribus magni eligendi ipsum suscipit.
          </p>
          <div 
          data-aos="fade-up"
          className="banner-quality">
            <div className="banner-indi">
              <GrSecure className="icon" />
              <p>Quality Product</p>
            </div>

            <div className="banner-indi">
              <IoFastFood className="icon" />
              <p>Fast Delivery</p>
            </div>

            <div className="banner-indi">
              <GiFoodTruck className="icon" />
              <p>Easy Payment Method</p>
            </div>

            <div className="banner-indi">
              <GiFoodTruck className="icon" />
              <p>Get Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
