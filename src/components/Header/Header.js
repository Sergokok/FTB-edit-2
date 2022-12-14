import React from "react";
import {Link, useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header({ loggedIn }) {
    const location = useLocation();
    return (
        <header className={location.pathname === '/' ? `header header_main` : `header`}>
            <Link to="/">
                <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            <Navigation
                loggedIn={loggedIn}
            />
        </header>
    );
}

export default Header;
