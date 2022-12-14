import React, {useEffect, useState} from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import Preloader from "../Preloader/Preloader";
import {moviesApi} from "../../utils/MoviesApi";

const Movies = ({
                    isLoading,
                    movies,
                    savedMovies,
                    onSubmit,
                    onLike,
                    onDislike,
                    searchKeyword,
                    setAllMovies,
                }) => {

    const [checkActive, setCheckActive] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const checkClick = () => {
        setCheckActive(!checkActive);
        localStorage.setItem("checkBoxMovies", !checkActive);
    }

    const filterMoviesShort = (filterMovies) =>
        filterMovies.filter((m) => m.duration < 40);

    useEffect(() => {
        const checkBoxLocal = localStorage.getItem("checkBoxMovies");
        if (checkBoxLocal === "true") {
            setIsShort(isShort);
            setCheckActive(true);
        }
    }, [isShort]);

    useEffect(() => {
        if (!localStorage.loadedMovies) {
            moviesApi
                .getMoviesAll()
                .then((data) => {
                    setAllMovies(data);
                    localStorage.setItem('loadedMovies', JSON.stringify(data));
                })
                .catch((err) => console.log(err));
        }
    }, [setAllMovies]);

    return (
        <>
            <SearchForm
                onSubmit={onSubmit}
                checkClick={checkClick}
                searchKeyword={searchKeyword}
                isShort={checkActive}
            />
            {isLoading && <Preloader/>}
            {!isLoading && (
                <MoviesCardList
                    movies={checkActive ? filterMoviesShort(movies) : movies}
                    checkBox={checkClick}
                    savedMovies={savedMovies}
                    onLike={onLike}
                    onDislike={onDislike}
                    searchKeyword={searchKeyword}
                />
            )}
        </>
    );
};

export default Movies;
