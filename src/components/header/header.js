import React from "react";
import logo from "./indoteak.png";
import "./header.css";

function Header() {
  return (
    <>
      {/* <header className="header container-fluid">
        <div className="logo-container ">
          <a
            href="https://indoteakdesign.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
      </header> */}
         <div className="indo-tile-design-1">
      <header className="f-r-a-m-e-i-n-d-o-t-i-l-e-d-e">
        <img
          className="image-1-icon"
          loading="eager"
          alt=""
          src={logo}
        />
        <div className="f-r-a-m-e-i-n-s-p-i-r-a-t-i-o">
          <div className="products">PRODUCTS</div>
          <div className="lookbook">LOOKBOOK</div>
          <div className="f-r-a-m-e-c-o-n-t-a-c-t-s-e-a">
            <div className="inspirations">INSPIRATIONS</div>
          </div>
          <div className="f-r-a-m-e-c-o-n-t-a-c-t-s-e-a1">
            <div className="trade">TRADE</div>
          </div>
          <div className="about">ABOUT</div>
          <div className="f-r-a-m-e-c-o-n-t-a-c-t-s-e-a2">
            <div className="contact">CONTACT</div>
          </div>
          <div className="search">SEARCH</div>
        </div>
        </header>
        </div>
    </>
  );
}

export default Header;
