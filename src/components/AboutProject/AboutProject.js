import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
    <section className="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__description">
            <div className="about-project__description-container">
                <h3 className="about-project__description-subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about-project__description-container">
                <h3 className="about-project__description-subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <div className="about-project__timing">
            <div className="about-project__timing-container about-project__timing-container_backend">
                <p className="about-project__timing-subtitle about-project__timing-subtitle_highlight">1 неделя</p>
                <p className="about-project__timing-text">Back-end</p>
            </div>
            <div className="about-project__timing-container about-project__timing-container_frontend">
                <p className="about-project__timing-subtitle">4 недели</p>
                <p className="about-project__timing-text">Front-end</p>
            </div>
        </div>
    </section>
    );
}

export default AboutProject;
