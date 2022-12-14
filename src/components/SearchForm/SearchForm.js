import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import {moviesApi} from "../../utils/MoviesApi";
import {ERROR_INPUT_SEARCH_MOVIES} from "../../utils/constants";

const SearchForm = ({ onSubmit, checkClick, searchKeyword, isShort, setAllMovies }) => {
    const [errorSetWord, setErrorSetWord] = useState('');

    const location = useLocation();

    const [movie, setMovies] = useState("");

    useEffect(() => {
        if (searchKeyword && location.pathname === "/movies") {
            setMovies(searchKeyword);
        }
    }, [searchKeyword, location.pathname]);

    const handleInputChange = (event) => {
        setErrorSetWord('');
        setMovies(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        if (movie === '') {
            setErrorSetWord(ERROR_INPUT_SEARCH_MOVIES);
        } else {
            onSubmit(movie);
        }
    }

    return (
        <section className="search-form">
            <form className="search-form__container" onSubmit={handleSearch}>
                <input
                    type="text"
                    className="search-form__input"
                    placeholder="Фильм"
                    // required={true}
                    onChange={handleInputChange}
                    value={movie}
                />

                <span className="search-form__input-error">{errorSetWord}</span>

                <button className="search-form__button" type="submit">Поиск</button>
            </form>
            <FilterCheckbox
                checkClick={checkClick}
                isShort={isShort}
            />
        </section>
    )
}

export default SearchForm;
