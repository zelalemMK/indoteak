import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <a href="https://fennel-purple-dteb.squarespace.com">
        <div className="header-logo" alt="Logo"></div>
      </a>

      <div className="nav-items">
        <div className="nav-item">
          <a href="https://fennel-purple-dteb.squarespace.com/inspirations">
            PRODUCTS
          </a>
        </div>
        <div className="nav-item">
          <a href="https://fennel-purple-dteb.squarespace.com/inspirations">
            INSPIRATIONS
          </a>
        </div>
        <div className="nav-item">
          <a href="https://fennel-purple-dteb.squarespace.com/tile-direct">
            TILE DIRECT
          </a>
        </div>
        <div className="nav-item">
          <a href="https://fennel-purple-dteb.squarespace.com/trade">TRADE</a>
        </div>
        <div className="nav-item">
          <a href="https://fennel-purple-dteb.squarespace.com/samples">
            SAMPLES
          </a>
        </div>
        <div className="nav-item">
          <a href="https://fennel-purple-dteb.squarespace.com/partner">
            PARTNER PORTAL
          </a>
        </div>
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
