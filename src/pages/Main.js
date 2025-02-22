import React from "react";
import "./diffcss/Main.css";
import Logo from "./../assets/logo.png"
import Listing1 from "./../assets/listing-01.jpg"
import Listing2 from "./../assets/listing-02.jpg"
import Listing3 from "./../assets/listing-03.jpg"
import Listing4 from "./../assets/listing-04.jpg"
import Listing5 from "./../assets/listing-05.jpg"
import Listing6 from "./../assets/listing-06.jpg"
import ListingI1 from "./../assets/listing-icon-01.png"
import ListingI2 from "./../assets/listing-icon-02.png"
import ListingI3 from "./../assets/listing-icon-03.png"
import BlockA from "./../assets/building1.jpg"
import BlockB from "./../assets/building2.jpg"
import BlockC from "./../assets/building3.jpg"
import Square from "./../assets/square.png"
import AboutImg from "./../assets/about-img.jpg"
import D1 from "./../assets/d-1.jpg"
import D2 from "./../assets/d-2.jpg"
import U1 from "./../assets/u-1.png"
import U2 from "./../assets/u-2.png"
import U3 from "./../assets/u-3.png"
import U4 from "./../assets/u-4.png"
import ClientImg from "./../assets/client.jpg"
const Main = () => {
  return (
    <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      /* Custom Scrollbar Styles */\n      ::-webkit-scrollbar {\n        width: 16px;\n        height: 16px;\n      }\n\n      ::-webkit-scrollbar-track {\n        background-color: #f1f1f1;\n        border-radius: 8px;\n        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);\n      }\n\n      ::-webkit-scrollbar-thumb {\n        background-color: #3115e7;\n        border-radius: 8px;\n        border: 4px solid #f1f1f1;\n        transition: background-color 0.3s ease;\n      }\n\n      ::-webkit-scrollbar-thumb:hover {\n        background-color: #e3c729;\n      }\n\n      ::-webkit-scrollbar-horizontal {\n        height: 16px;\n      }\n\n      body {\n        margin: 0;\n        padding: 0;\n        background-color: #f4f4f4;\n      }\n\n      .header_section {\n        background-color: rgba(\n          161,\n          189,\n          221,\n          0.1\n        ); /* Almost fully transparent */\n        padding: 5px 0;\n        width: 100%;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 1000;\n        transition: background-color 0.3s ease-in-out;\n      }\n\n      .header_section.scrolled {\n        background-color: #1164c3; /* Solid color after scrolling */\n      }\n\n      .navbar {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 20px;\n      }\n\n      .navbar-brand img {\n        height: 40px;\n        width: 125px;\n      }\n\n      .navbar-nav {\n        display: flex;\n        gap: 20px;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      .nav-item a {\n        text-decoration: none;\n        color: white;\n        font-size: 16px;\n        font-weight: bold;\n        transition: transform 0.3s ease, padding 0.3s ease;\n      }\n\n      .nav-item a:hover {\n        transform: scale(1.1);\n        padding: 12px 24px;\n      }\n\n      .User_option {\n        display: flex;\n        gap: 15px;\n        margin-left: auto;\n      }\n\n      .User_option a {\n        padding: 10px 20px;\n        border-radius: 5px;\n        text-decoration: none;\n        font-weight: bold;\n        transition: transform 0.3s ease, padding 0.3s ease;\n      }\n\n      .User_option a:first-child {\n        background-color: transparent;\n        border: 2px solid white;\n        color: white;\n      }\n\n      .User_option a:last-child {\n        background-color: #ff9800;\n        color: white;\n      }\n    "
    }}
  />
  <div className="hero_area">
    {/* header section strats */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <img src={Logo} alt="" />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#listing">
                Listing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#house">
                Blocks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#price">
                PRICING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACT US
              </a>
            </li>
            <div className="User_option">
              <a href="login.html">Sign In</a>
              <a href="signup.html">Sign Up</a>
            </div>
          </ul>
        </nav>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
    <section id="home" className="slider_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-1">
            <div className="detail-box">
              <h1>
                <span> Modern</span> <br />
                Apartment <br />
                House
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of
              </p>
              <div className="btn-box">
                <a href="" className="">
                  {" "}
                  Read More{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end slider section */}
  </div>
  {/* find section */}
  <section className="find_section">
    <div className="container">
      <form action="">
        <div className="form-row">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Serach Your Categories "
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Location "
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="">
              search
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
  {/* end find section */}
  <div id="listing" className="recent-listing">
    <div className="container">
      <div className="row">
        "
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Recent Listing</h2>
            <h6>Check Them Out</h6>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="owl-carousel owl-listing">
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <div className="listing-item">
                    <div className="left-image">
                      <a href="#">
                        <img src={Listing1} alt="" />
                      </a>
                    </div>
                    <div className="right-content align-self-center">
                      <a href="#">
                        <h4>1. First Apartment Unit</h4>
                      </a>
                      <h6>by: Sale Agent</h6>
                      <ul className="rate">
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>(18) Reviews</li>
                      </ul>
                      <span className="price">
                        <div className="icon">
                          <img src={ListingI1} alt="" />
                        </div>
                        $450 - $950 / month with taxes
                      </span>
                      <span className="details">
                        Details: <em>2760 sq ft</em>
                      </span>
                      <ul className="info">
                        <li>
                          <img src={ListingI2} alt="" />
                          4 Bedrooms
                        </li>
                        <li>
                          <img src={ListingI3} alt="" />
                          4 Bathrooms
                        </li>
                      </ul>
                      <div className="main-white-button">
                        <a href="contact.html">
                          <i className="fa fa-eye" /> Contact Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="listing-item">
                    <div className="left-image">
                      <a href="#">
                        <img src={Listing2} alt="" />
                      </a>
                    </div>
                    <div className="right-content align-self-center">
                      <a href="#">
                        <h4>2. Another House of Gaming</h4>
                      </a>
                      <h6>by: Top Sale Agent</h6>
                      <ul className="rate">
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>(24) Reviews</li>
                      </ul>
                      <span className="price">
                        <div className="icon">
                          <img src={ListingI1} alt="" />
                        </div>
                        $1,400 - $3,500 / month with taxes
                      </span>
                      <span className="details">
                        Details: <em>3650 sq ft</em>
                      </span>
                      <ul className="info">
                        <li>
                          <img src={ListingI2} alt="" />
                          4 Bedrooms
                        </li>
                        <li>
                          <img src={ListingI3} alt="" />
                          3 Bathrooms
                        </li>
                      </ul>
                      <div className="main-white-button">
                        <a href="contact.html">
                          <i className="fa fa-eye" /> Contact Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="listing-item">
                    <div className="left-image">
                      <a href="#">
                        <img src={Listing3} alt="" />
                      </a>
                    </div>
                    <div className="right-content align-self-center">
                      <a href="#">
                        <h4>3. Secret Place Hidden House</h4>
                      </a>
                      <h6>by: Best Property</h6>
                      <ul className="rate">
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>(36) Reviews</li>
                      </ul>
                      <span className="price">
                        <div className="icon">
                          <img src={ListingI1} alt="" />
                        </div>
                        $1,500 - $3,600 / month with taxes
                      </span>
                      <span className="details">
                        Details: <em>5500 sq ft</em>
                      </span>
                      <ul className="info">
                        <li>
                          <img src={ListingI2} alt="" />
                          4 Bedrooms
                        </li>
                        <li>
                          <img src={ListingI3} alt="" />
                          3 Bathrooms
                        </li>
                      </ul>
                      <div className="main-white-button">
                        <a href="contact.html">
                          <i className="fa fa-eye" /> Contact Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <div className="listing-item">
                    <div className="left-image">
                      <a href="#">
                        <img src={Listing4} alt="" />
                      </a>
                    </div>
                    <div className="right-content align-self-center">
                      <a href="#">
                        <h4>4. Sunshine Fourth Apartment</h4>
                      </a>
                      <h6>by: Sale Agent</h6>
                      <ul className="rate">
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>(24) Reviews</li>
                      </ul>
                      <span className="price">
                        <div className="icon">
                          <img src={ListingI1} alt="" />
                        </div>
                        $3,600 / month with taxes
                      </span>
                      <span className="details">
                        Details: <em>3660 sq ft</em>
                      </span>
                      <ul className="info">
                        <li>
                          <img src={ListingI2} alt="" />
                          5 Bedrooms
                        </li>
                        <li>
                          <img src={ListingI3} alt="" />
                          3 Bathrooms
                        </li>
                      </ul>
                      <div className="main-white-button">
                        <a href="contact.html">
                          <i className="fa fa-eye" /> Contact Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="listing-item">
                    <div className="left-image">
                      <a href="#">
                        <img src={Listing5} alt="" />
                      </a>
                    </div>
                    <div className="right-content align-self-center">
                      <a href="#">
                        <h4>5. Best House Of the Town</h4>
                      </a>
                      <h6>by: Sale Agent</h6>
                      <ul className="rate">
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>(32) Reviews</li>
                      </ul>
                      <span className="price">
                        <div className="icon">
                          <img src={ListingI1} alt="" />
                        </div>
                        $5,600 / month with taxes
                      </span>
                      <span className="details">
                        Details: <em>1750 sq ft</em>
                      </span>
                      <ul className="info">
                        <li>
                          <img src={ListingI2} alt="" />
                          6 Bedrooms
                        </li>
                        <li>
                          <img src={ListingI3} alt="" />
                          3 Bathrooms
                        </li>
                      </ul>
                      <div className="main-white-button">
                        <a href="contact.html">
                          <i className="fa fa-eye" /> Contact Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="listing-item">
                    <div className="left-image">
                      <a href="#">
                        <img src={Listing6} alt="" />
                      </a>
                    </div>
                    <div className="right-content align-self-center">
                      <a href="#">
                        <h4>6. Amazing Pool Party Villa</h4>
                      </a>
                      <h6>by: Sale Agent</h6>
                      <ul className="rate">
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>(40) Reviews</li>
                      </ul>
                      <span className="price">
                        <div className="icon">
                          <img src={ListingI1} alt="" />
                        </div>
                        $3,850 / month with taxes
                      </span>
                      <span className="details">
                        Details: <em>3660 sq ft</em>
                      </span>
                      <ul className="info">
                        <li>
                          <img src={ListingI2} alt="" />
                          4 Bedrooms
                        </li>
                        <li>
                          <img src={ListingI3} alt="" />
                          3 Bathrooms
                        </li>
                      </ul>
                      <div className="main-white-button">
                        <a href="contact.html">
                          <i className="fa fa-eye" /> Contact Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-lg-12">
                  <div className="listing-item">
                    <div className="left-image">
                      <a href="#">
                        <img src={Listing5} alt="" />
                      </a>
                    </div>
                    <div className="right-content align-self-center">
                      <a href="#">
                        <h4>7. Sunny Apartment</h4>
                      </a>
                      <h6>by: Sale Agent</h6>
                      <ul className="rate">
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>(24) Reviews</li>
                      </ul>
                      <span className="price">
                        <div className="icon">
                          <img src={ListingI1} alt="" />
                        </div>
                        $5,450 / month with taxes
                      </span>
                      <span className="details">
                        Details: <em>1640 sq ft</em>
                      </span>
                      <ul className="info">
                        <li>
                          <img src={ListingI2} alt="" />
                          8 Bedrooms
                        </li>
                        <li>
                          <img src={ListingI3} alt="" />
                          5 Bathrooms
                        </li>
                      </ul>
                      <div className="main-white-button">
                        <a href="contact.html">
                          <i className="fa fa-eye" /> Contact Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="listing-item">
                    <div className="left-image">
                      <a href="#">
                        <img src={Listing2} alt="" />
                      </a>
                    </div>
                    <div className="right-content align-self-center">
                      <a href="#">
                        <h4>8. Third House of Gaming</h4>
                      </a>
                      <h6>by: Sale Agent</h6>
                      <ul className="rate">
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>(15) Reviews</li>
                      </ul>
                      <span className="price">
                        <div className="icon">
                          <img src={ListingI1} alt="" />
                        </div>
                        $5,520 / month with taxes
                      </span>
                      <span className="details">
                        Details: <em>1660 sq ft</em>
                      </span>
                      <ul className="info">
                        <li>
                          <img src={ListingI2} alt="" />
                          5 Bedrooms
                        </li>
                        <li>
                          <img src={ListingI3} alt="" />
                          4 Bathrooms
                        </li>
                      </ul>
                      <div className="main-white-button">
                        <a href="contact.html">
                          <i className="fa fa-eye" /> Contact Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="listing-item">
                    <div className="left-image">
                      <a href="#">
                        <img src={Listing6} alt="" />
                      </a>
                    </div>
                    <div className="right-content align-self-center">
                      <a href="#">
                        <h4>9. Relaxing BBQ Party Villa</h4>
                      </a>
                      <h6>by: Sale Agent</h6>
                      <ul className="rate">
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>
                          <i className="fa fa-star-o" />
                        </li>
                        <li>(20) Reviews</li>
                      </ul>
                      <span className="price">
                        <div className="icon">
                          <img src={ListingI1} alt="" />
                        </div>
                        $4,760 / month with taxes
                      </span>
                      <span className="details">
                        Details: <em>2880 sq ft</em>
                      </span>
                      <ul className="info">
                        <li>
                          <img src={ListingI2} alt="" />
                          6 Bedrooms
                        </li>
                        <li>
                          <img src={ListingI3} alt="" />
                          4 Bathrooms
                        </li>
                      </ul>
                      <div className="main-white-button">
                        <a href="contact.html">
                          <i className="fa fa-eye" /> Contact Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* sale section */}
  <section id="house" className="sale_section">
    <div className="container">
      <h2 className="section-title">Discover Your Perfect Home</h2>
      <p className="section-subtitle">
        Explore our premium apartment blocks designed for luxury and comfort.
      </p>
      <div className="card-container">
        {/* Block A */}
        <div className="card">
          <a href="#">
            <img src={BlockA} alt="Apartment A" />
            <div className="card-content">
              <h3>Block A</h3>
              <p>
                Step into sophistication. Block A offers spacious apartments
                with breathtaking views.
              </p>
            </div>
          </a>
        </div>
        {/* Block B */}
        <div className="card">
          <a href="B-block.html">
            <img src={BlockB} alt="Apartment B" />
            <div className="card-content">
              <h3>Block B</h3>
              <p>
                Experience the pinnacle of luxury living. Block B combines
                modern design with serene surroundings.
              </p>
            </div>
          </a>
        </div>
        {/* Block C */}
        <div className="card">
          <a href="#">
            <img src={BlockC} alt="Apartment C" />
            <div className="card-content">
              <h3>Block C</h3>
              <p>
                Affordable elegance with top-tier amenities. Block C is designed
                for your ultimate comfort.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end sale section */}
  {/* about section */}
  <section id="about" className="about_section layout_padding-bottom">
    <div className="square-box">
      <img src={Square} alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>About Our Apartment</h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words
            </p>
            <a href=""> Read More </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about section */}
  {/* price section */}
  <section id="price" className="price_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>What is included</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the
        </p>
      </div>
      <div className="price_container">
        {/* Keep only the middle card (Standard) */}
        <div className="box middle-box">
          <div className="detail-box">
            <div className="heading-box">
              <h6>Standard</h6>
            </div>
            <div className="text-box">
              <h2>$2000.00</h2>
              <ul>
                <li>variations of</li>
                <li>passages of Lorem</li>
                <li>Ipsum available,</li>
                <li>but the majority</li>
                <li>have suffered</li>
                <li>alteration in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end price section */}
  {/* deal section */}
  <section className="deal_section layout_padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>Very Good Deal For House</h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <a href=""> Read More </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <div className="box b1">
              <img src={D1} alt="" />
            </div>
            <div className="box b1">
              <img src={D2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end deal section */}
  {/* us section */}
  <section className="us_section layout_padding2">
    <div className="container">
      <div className="heading_container">
        <h2>Why Choose Us</h2>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="box">
            <div className="img-box">
              <img src={U1} alt="" />
            </div>
            <div className="detail-box">
              <h3 className="price">1000+</h3>
              <h5>Years of House</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="box">
            <div className="img-box">
              <img src={U2} alt="" />
            </div>
            <div className="detail-box">
              <h3>20000+</h3>
              <h5>Projects Delivered</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="box">
            <div className="img-box">
              <img src={U3} alt="" />
            </div>
            <div className="detail-box">
              <h3>10000+</h3>
              <h5>Satisfied Customers</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="box">
            <div className="img-box">
              <img src={U4} alt="" />
            </div>
            <div className="detail-box">
              <h3>1500+</h3>
              <h5>Cheap Rates</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end us section */}
  {/*  */}
  {/* client secction */}
  <section className="client_section layout_padding">
    <div className="container-fluid">
      <div className="heading_container">
        <h2>What is Says Our Customer</h2>
      </div>
      <div className="client_container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="box">
                <div className="img-box">
                  <img src={ClientImg} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <span>Majority</span>
                    <hr />
                  </h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="img-box">
                  <img src={ClientImg} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <span>Majority</span>
                    <hr />
                  </h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="img-box">
                  <img src={ClientImg} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <span>Majority</span>
                    <hr />
                  </h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end client section */}
  {/* contact section */}
  <section id="contact" className="contact_section">
    <div className="container">
      <div className="heading_container">
        <h2>Get In Touch</h2>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 px-0">
          <div className="map_container">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width={600}
                height={300}
                frameBorder={0}
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-5">
          <div className="form_container">
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default Main;
