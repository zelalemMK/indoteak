import React from "react";
import logo from "./header.svg";
import "./header.css";

function Header() {
  return (
    // <div className="nav">
    //   <div className="logo">
    //     <img src={logo} />
    //   </div>
    //   <ul>
    //     <li>PRODUCTS</li>
    //     <li>INSPRATIONS</li>
    //     <li>TILE DIRECT</li>
    //     <li>TRADE</li>
    //     <li>TRADE SAMPLES</li>
    //   </ul>
    // </div>

    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: 52,
        paddingRight: 52,
        justifyContent: "center",
        alignItems: "center",
        gap: 538,
        display: "inline-flex",
      }}
    >
      <img
        style={{ width: 299, height: 45.4 }}
        src={logo}
      />
      <div
        style={{
          width: 787,
          height: 131,
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 16,
            fontFamily: "Syne",
            fontWeight: "700",
            lineHeight: 24,
            wordWrap: "break-word",
          }}
        >
          PRODUCTS
        </div>
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 16,
            fontFamily: "Syne",
            fontWeight: "700",
            lineHeight: 24,
            wordWrap: "break-word",
          }}
        >
          INSPIRATIONS
        </div>
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 16,
            fontFamily: "Syne",
            fontWeight: "700",
            lineHeight: 24,
            wordWrap: "break-word",
          }}
        >
          TILE DIRECT
        </div>
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 16,
            fontFamily: "Syne",
            fontWeight: "700",
            lineHeight: 24,
            wordWrap: "break-word",
          }}
        >
          TRADE
        </div>
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 16,
            fontFamily: "Syne",
            fontWeight: "700",
            lineHeight: 24,
            wordWrap: "break-word",
          }}
        >
          SAMPLES
        </div>
      </div>
    </div>
  );
}

export default Header;
