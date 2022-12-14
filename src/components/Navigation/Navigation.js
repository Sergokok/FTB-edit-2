import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Navigation({ loggedIn }) {
    const location = useLocation();
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);
    const handleHamburgerMenuOpen = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    }
    return (
        <>
        <section className="navigation">
            {!loggedIn ? (
            <nav className="navigation__list">
                    <Link to="/signup" className="navigation__link navigation__link_main">Регистрация</Link>
                    <Link to="/signin" className="navigation__link navigation__link_main navigation__link_signin">Войти</Link>
            </nav>
            ) : (
            <nav className="navigation__list">
                    <NavLink to="/movies" className={location.pathname === '/movies' ? 'navigation__link navigation__link_active' : 'navigation__link'}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className={location.pathname === '/saved-movies' ? 'navigation__link navigation__link_active' : 'navigation__link'}>Сохранённые фильмы</NavLink>
                    <NavLink to="/profile" className={location.pathname === '/profile' ? 'navigation__link navigation__link_active' : 'navigation__link'}>Аккаунт</NavLink>
                    <NavLink to="/profile" className="navigation__link navigation__link_profile"/>
                <div className="navigation__menu">
                    <button className="navigation__menu-button" onClick={handleHamburgerMenuOpen}/>
                    <HamburgerMenu
                        open={isHamburgerMenuOpen}
                        close={handleHamburgerMenuOpen}
                    />
                </div>
            </nav>
            )}
        </section>
        </>
    )
}

export default Navigation;
