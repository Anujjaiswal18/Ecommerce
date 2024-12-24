import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <div className="main-footer-container">
    <div className="sub-main">
      
    <div className="about-app">
      <h1>AJ-Store</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam corporis quas vero recusandae soluta voluptate odio incidunt? Id unde obcaecati qui vel officiis dolorem architecto autem modi at, quod quo?</p>
    </div>
    <div className="important-links">
      <h3>Important Links</h3>
      <ul>
        <li>Linkedin</li>
        <li>Git Hub</li>
        <li>YouTube</li>
        <li>Fiverr</li>
      </ul>
    </div>
    <div className="stores">
      <ul>
        <li>Career</li>
        <li>Seller</li>
        <li>Experts</li>
        <li>About</li>
      </ul>
    </div>
    <div className="redirect">

    <ul>
      <Link to="/">
      <li>Home</li>
      </Link>
      <Link to="shirts">
      <li>Shirts</li>
      </Link>
      <Link to="TShirts">
      <li>T-Shirts</li>
      </Link>
      <Link to="all">
      
      <li>All</li>
      </Link>
    </ul>
    
    </div>
    </div>
    <div className="c-section">
    <h4 className="copyright">&copy; All Right Reserved !</h4>

    </div>
  </div>;
};

export default Footer;
