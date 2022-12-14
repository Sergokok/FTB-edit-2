import React, { useEffect, useState, useMemo } from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import {moviesApi} from "../../utils/MoviesApi";

const SavedMovies = ({
    isLoading,
    savedMovies,
    onDislike,
    searchKeyword,
}) => {
    const [checkActive, setCheckActive] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const [filter, setFilter] = useState("");
    const [noResults, setNoResults] = useState(true);

    const filterMoviesShort = (filterMovies) =>
        filterMovies.filter((m) => m.duration < 40);

    const checkClick = () => {
        setCheckActive(!checkActive);
        localStorage.setItem("checkBoxSaved", !checkActive);
    };

    useEffect(() => {
        const checkLocal = localStorage.getItem("checkBoxSaved");
        if (checkLocal === "true") {
            setIsShort(isShort);
            setCheckActive(true);
        }
    }, [isShort]);

    const filterMovies = useMemo(
        () =>
            savedMovies.filter((savedMovies) =>
                savedMovies.nameRU.toLowerCase().includes(filter.toLowerCase())
            ),
        [filter, savedMovies]
    );

    useEffect(() => {
        if (filterMovies.length === 0) {
            setNoResults(false);
        }
    }, [filterMovies.length]);

    return (
        <section className="saved-movies">
            <SearchForm
                onSubmit={setFilter}
                checkClick={checkClick}
                searchKeyword={searchKeyword}
                isShort={checkActive}
            />
            {isLoading && <Preloader/>}
            {!isLoading && (
                <MoviesCardList
                    movies={checkActive ? filterMoviesShort(filterMovies) : filterMovies}
                    onDislike={onDislike}
                    savedMovies={savedMovies}
                    noResults={noResults}
                />
            )}
        </section>
    );
}
 export default SavedMovies;
