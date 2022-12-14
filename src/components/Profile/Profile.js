import React, {useState, useEffect, useContext} from 'react';
import './Profile.css';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {FormValidation} from "../../utils/FormValidation";

const Profile = ({onEditProfile, signOut, infoMessage}) => {

    const currentUser = useContext(CurrentUserContext);
    const {values, handleChange, errors, isValid, resetForm} = FormValidation({});
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const {name, email} = values;

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        onEditProfile(values);
        resetForm();
    }

    const handleFocus = (evt) => {
        evt.target.select();
    }

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser, {}, true);
        }
    }, [currentUser, resetForm]);

    useEffect(() => {
        if ((name === currentUser.name && email === currentUser.email) && isValid) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [email, isValid, name, currentUser.email, currentUser.name]);

    return (
        <section className='profile'>
            <form className='profile__form'
                  name='profile-form'
                  onSubmit={onFormSubmit}
                  id='profile'>
                <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
                <div className='profile__fieldset'>
                    <label className='profile__label'>Имя
                        <input
                            className='profile__input'
                            type='text'
                            name='name'
                            placeholder='Имя'
                            minLength={2}
                            maxLength={30}
                            required={true}
                            value={name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
                    </label>
                    <span
                        className={`profile__error ${!isValid && 'profile__error_active'}`}
                        id='profile-name-error'>
                        {errors.name}
                    </span>

                    <label className='profile__label'>E-mail
                        <input
                            className='profile__input'
                            type='email'
                            name='email'
                            placeholder='Email'
                            required={true}
                            value={email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
                    </label>
                    <span
                        className={`profile__error ${!isValid && 'profile__error_active'}`}
                        id='profile-email-error'
                    >
                        {errors.email}
                    </span>

                </div>
                <p className='profile__info-message'>{infoMessage}</p>
                <button
                    className={`profile__button profile__button-edit' ${buttonDisabled && 'profile__button-edit_disabled'}`}
                    type={'submit'}
                    disabled={buttonDisabled}>
                    Редактировать
                </button>

                <button
                    className='profile__button profile__button-exit'
                    type='button'
                    onClick={signOut}>
                    Выйти из аккаунта
                </button>
            </form>
        </section>
    )
}

export default Profile;
