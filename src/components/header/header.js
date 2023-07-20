import React from "react";
import logo from './indoteak.png';
import './header.css'


function Header() {

    return <header className="header">
        <img src={logo} alt="logo" className="logo" />
            <HeaderMenu />
    </header>
}
function HeaderMenu({links}) {
    return (
        <nav className="header-menus">
            <ul>
                <li><a href="http://localhost:3000/edit">PRODUCTS</a></li>
                <li>LOOKBOOK</li>
                <li>INSPIRATION</li>
                <li>TRADE</li>
                <li>CONTACT</li>
                <li>SEARCH</li>
            </ul>
        </nav>
    )
}


export default Header;