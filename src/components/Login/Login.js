import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { FormValidation } from "../../utils/FormValidation";
import { EMAIL_PATTERN } from "../../utils/constants";

function Login({onAuth, infoMessage}) {

    const {values, handleChange, errors, isValid, resetForm} = FormValidation({});
    const {email, password} = values;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAuth(values);
        resetForm();
    }

    return (
        <section className="login">
            <Link to="/">
                <img className="register__logo" src={logo} alt="Логотип"/>
            </Link>
            <h2 className="login__title">Рады видеть!</h2>

            <form className="login__form"
                    onSubmit={handleSubmit}
                    id="login">

                <label className="login__label">E-mail</label>
                <input className="login__input"
                       type="email"
                       name="email"
                       placeholder="Email"
                       required={true}
                       pattern={EMAIL_PATTERN}
                       autoComplete="off"
                       value={email || ""}
                       onChange={handleChange}
                />
                <span
                    className={`login__error ${!isValid && 'login__error_active'}`}
                    id='login-email-error'
                >
              {errors.email}
            </span>

                <label className="login__label">Пароль</label>
                <input className="login__input"
                       type="password"
                       name="password"
                       placeholder="Пароль"
                       minLength="8"
                       maxLength="30"
                       required={true}
                       value={password || ""}
                       onChange={handleChange}
                />
                <span
                    className={`login__error ${!isValid && 'login__error_active'}`}
                    id='login-password-error'
                >
              {errors.password}
            </span>
                <p className='login__info-message'>{infoMessage}</p>
                <button className={`login__button ${!isValid && 'login__button_disabled'}`}
                        type="submit"
                        form="login"
                        disabled={!isValid}
                >
                    Войти
                </button>
            </form>
            <p className="login__text">
                Ещё не зарегистрированы?
                <a className="login__link"
                   href="/signup">Регистрация</a></p>
        </section>
    );
}

export default Login;
