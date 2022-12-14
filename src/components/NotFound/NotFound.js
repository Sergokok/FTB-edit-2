import React from "react";
// import { useHistory } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    // const history = useHistory();
    function goBack() {
        window.history.go(-3);
    }

    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__subtitle">Страница не найдена</p>
            <button
                className="not-found__button"
                // onClick={() => history.goBack()}
                onClick={goBack}
            >Назад
            </button>
        </section>
    )
}

export default NotFound;
