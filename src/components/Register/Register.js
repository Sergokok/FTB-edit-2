import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import {FormValidation} from "../../utils/FormValidation";
import {EMAIL_PATTERN} from "../../utils/constants";

function Register({onAuth, infoMessage}) {

    const {values, handleChange, errors, isValid, resetForm} = FormValidation({});
    const {name, email, password} = values;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAuth(values);
        resetForm();
    }

    return (
        <section className="register">
            <Link to="/">
                <img className="register__logo" src={logo} alt="Логотип"/>
                </Link>

            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form"
                  onSubmit={handleSubmit}
                  id="register">

                <label className="register__label">Имя</label>
                <input
                    className="register__input"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    minLength="2"
                    maxLength="30"
                    required={true}
                    value={name || ""}
                    onChange={handleChange}
                />
                <span
                    className={`register__error ${!isValid && 'register__error_active'}`}
                    id='register-name-error'
                >
              {errors.name}
            </span>

                <label className="register__label">E-mail</label>
                <input
                    className="register__input"
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
                    className={`register__error ${!isValid && 'register__error_active'}`}
                    id='register-email-error'
                >
              {errors.email}
            </span>

                <label className="register__label">Пароль</label>
                <input
                    className="register__input"
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
                    className={`register__error ${!isValid && 'register__error_active'}`}
                    id='register-password-error'
                >
              {errors.password}
            </span>
                <p className='register__info-message'>{infoMessage}</p>
                <button
                    className={`register__button ${!isValid && 'register__button_disabled'}`}
                    type="submit"
                    form='register'
                    disabled={!isValid}
                >
                    Зарегистрироваться
                </button>
            </form>
            <p className="register__text">Уже зарегистрированы? <a className="register__link" href="/signin">Войти</a>
            </p>
        </section>
    );
}

export default Register;
