import React, { useState } from "react";
import logo from "./header.svg";
import "./header.css";

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function displayMenu() {
    setIsMenuVisible(!isMenuVisible);
    console.log(`isMenuVisible is set to ${isMenuVisible}`);
  }

  return (
    <div className="header-container">
      <a href="https://fennel-purple-dteb.squarespace.com">
        <img className="header-logo" src={logo} alt="Logo" />
      </a>

      {/* <input type="checkbox" id="burger-checkbox" className="burger-checkbox" /> */}
      {/* <label htmlFor="burger-checkbox" className="burger-menu">
        <span className="burger-icon" onClick={displayMenu}>
          
        </span>
      </label> */}

      <div className="nav-items">
        <div className="nav-item">PRODUCTS</div>
        <div className="nav-item">INSPIRATIONS</div>
        <div className="nav-item">TILE DIRECT</div>
        <div className="nav-item">TRADE</div>
        <div className="nav-item">SAMPLES</div>
      </div>
    </div>
  );
}

// <div
//   style={{
//     width: "100%",
//     height: "100%",
//     paddingLeft: 52,
//     paddingRight: 52,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 538,
//     display: "inline-flex",
//   }}
// >
//   <img
//     style={{ width: 299, height: 45.4 }}
//     src={logo}
//   />
//   <div
//     style={{
//       width: 787,
//       height: 131,
//       justifyContent: "space-between",
//       alignItems: "center",
//       display: "inline-flex",
//     }}
//   >
//     <div
//       style={{
//         textAlign: "center",
//         color: "black",
//         fontSize: 16,
//         fontFamily: "Syne",
//         fontWeight: "700",
//         lineHeight: 24,
//         wordWrap: "break-word",
//       }}
//     >
//       PRODUCTS
//     </div>
//     <div
//       style={{
//         textAlign: "center",
//         color: "black",
//         fontSize: 16,
//         fontFamily: "Syne",
//         fontWeight: "700",
//         lineHeight: 24,
//         wordWrap: "break-word",
//       }}
//     >
//       INSPIRATIONS
//     </div>
//     <div
//       style={{
//         textAlign: "center",
//         color: "black",
//         fontSize: 16,
//         fontFamily: "Syne",
//         fontWeight: "700",
//         lineHeight: 24,
//         wordWrap: "break-word",
//       }}
//     >
//       TILE DIRECT
//     </div>
//     <div
//       style={{
//         textAlign: "center",
//         color: "black",
//         fontSize: 16,
//         fontFamily: "Syne",
//         fontWeight: "700",
//         lineHeight: 24,
//         wordWrap: "break-word",
//       }}
//     >
//       TRADE
//     </div>
//     <div
//       style={{
//         textAlign: "center",
//         color: "black",
//         fontSize: 16,
//         fontFamily: "Syne",
//         fontWeight: "700",
//         lineHeight: 24,
//         wordWrap: "break-word",
//       }}
//     >
//       SAMPLES
//     </div>
//   </div>
// </div>

export default Header;
