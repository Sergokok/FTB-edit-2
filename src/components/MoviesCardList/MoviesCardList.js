import React, { useEffect, useCallback } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import {getCards} from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({
    movies,
    onLike,
    onDislike,
    savedMovies,
    searchKeyword,
    noResults,
    isLoading
}) => {

    const location = useLocation();
    const [addCards, setAddCards] = React.useState(12);
    const [currentCards, setCurrentCards] = React.useState(0);
    const [moviesToShow, setMoviesToShow] = React.useState([]);
    const [hiddenButton, setHiddenButton] = React.useState(false);

    // const getCards = (windowSize) => {
    //     if (windowSize > 1200) {
    //         return {first: 12, extra: 3};
    //     } else if (windowSize > 700) {
    //         return {first: 12, extra: 2};
    //     }
    //     return {first: 12, extra: 1};
    // }

    const renderAddCards = React.useCallback(() => {
        const count = Math.min(movies.length, currentCards + addCards);
        const moreCards = movies.slice(currentCards, count);
        setMoviesToShow([...moviesToShow, ...moreCards]);
        setCurrentCards(count);
    }, [currentCards, addCards, movies, moviesToShow]);

    useEffect(() => {
        let windowSize = window.innerWidth;
        setAddCards(getCards(windowSize).extra);
        const count = Math.min(movies.length, getCards(windowSize).first);
        setMoviesToShow(movies.slice(0, count));
        setCurrentCards(count);
    }, [movies]);

    useEffect(() => {
        if ((currentCards > movies.length) || (currentCards === movies.length)) {
            setHiddenButton(true);
        }
    }, [currentCards, movies.length]);

    useEffect(() => {
        function handleResize() {
            setAddCards(getCards(window.innerWidth).extra);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderMovies = useCallback(() => {
        renderAddCards();
    }, [renderAddCards]);

    if(location.pathname === '/movies') {
        return (
            <section className='movies-cards-list'>
                <div className='movies-cards-list__container'>
                    {isLoading && <Preloader/>}
                    {movies.length ? (
                        moviesToShow.map((movie) =>
                            <MoviesCard
                                key={movie.id}
                                movie={movie}
                                onLike={onLike}
                                onDislike={onDislike}
                                savedMovies={savedMovies}
                            />
                        )
                    ) : (
                        <p className={`movies-card__no-result ${searchKeyword &&
                        'movies-card__no-result_active'}`}
                        >По вашему запросу ничего не найдено
                        </p>
                    )
                    }
                </div>

                <button
                    className={`movies-card__button-more ${
                        ((currentCards > movies.length) || (currentCards === movies.length)) &&
                        'movies-card__button-more_hidden'
                    }`}
                    type={'button'}
                    onClick={renderMovies}
                >Ещё
                </button>
            </section>
        )
    } else if (location.pathname === '/saved-movies') {
        return (
            <section className='movies-cards-list'>
                <div className='movies-cards-list__container'>
                    {isLoading && <Preloader/>}
                    {movies.length ? (
                        moviesToShow.map((movie) =>
                            <MoviesCard
                                key={movie._id}
                                movie={movie}
                                onLike={onLike}
                                onDislike={onDislike}
                                savedMovies={savedMovies}
                            />
                        )
                    ) : (
                        <p className={`'movies-card__no-result'${noResults &&
                        'movies-card__no-result_active'}`}
                        >
                            По вашему запросу ничего не найдено
                        </p>
                    )}
                </div>
            </section>
        )
    }
}

export default MoviesCardList;
