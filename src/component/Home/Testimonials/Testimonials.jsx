import React from "react";
import TestimonialsData from "./TestimonialsData";
import Slider from "react-slick/lib/slider";

const Testimonials = () => {
  const settingsTesto = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pouseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="ambasdor-info">
      <div className="heading-detail">
        {/* header section */}
        <div className="products-header">
          <p 
           data-aos="fade-up"
          className="p1"> What Our Customers are Saying</p>
          <h1
          data-aos="fade-up"
          >Testimonials</h1>
          <p 
          data-aos="fade-up"
          className="p2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui
            tenetur incidunt dignissimos est cumque.
          </p>
        </div>
        {/* testimonials card */}

        <div className="testo-main">
          <Slider {...settingsTesto} >
            
          {TestimonialsData.map((cur) => (
           
            <div 
            className="testo-container"
            key={cur.id} >
              <div>
              <div className="testo-img">
                <img src={cur.img}alt="" />
              </div>

              <div className="testo-info-c">
                <p className="testo-txt">{cur.text}</p>
                <h1 className="testo-name">{cur.name}</h1>
              </div>
              <p className="double-quotes">,,</p>
              </div>
            </div>
          ))}

          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
