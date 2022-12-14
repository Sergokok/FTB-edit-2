import React from "react";
import './Portfolio.css';
import linkIcon from "../../images/link-icon.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__links-title">Портфолио</h3>
            <ul className="portfolio__links">
                <li className="portfolio__item"><a href="https://github.com/nknrw/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">Статичный сайт<img className="portfolio__link-icon" src={linkIcon} alt="Ссылка"/></a></li>
                <li className="portfolio__item"><a href="https://github.com/nknrw/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">Адаптивный cайт<img className="portfolio__link-icon" src={linkIcon} alt="Ссылка"/></a></li>
                <li className="portfolio__item"><a href="https://github.com/nknrw/react-mesto-api-full" className="portfolio__link" target="_blank" rel="noreferrer">Одностраничное приложение<img className="portfolio__link-icon" src={linkIcon} alt="Ссылка"/></a></li>
            </ul>
        </section>
    );
}

export default Portfolio
