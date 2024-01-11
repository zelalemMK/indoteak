import React from "react";
import logo from "./indoteak.png";
// import "./header.css";

function Header() {
  return (
    <header className="header container-fluid">
      <div className="logo-container ">
        <a href="https://indoteakdesign.com/" target="_blank" rel="noreferrer">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
    </header>
  );
}

export default Header;
