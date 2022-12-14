import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__container">
                <p className="footer__year">&copy; 2022</p>
                <ul className="footer__links">
                    <li className="footer__link"><a href="https://praktikum.yandex.ru/" className="footer__link-item" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                    <li className="footer__link"><a href="https://github.com/nknrw" className="footer__link-item" target="_blank" rel="noreferrer">Github</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
