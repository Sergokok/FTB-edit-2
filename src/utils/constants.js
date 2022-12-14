// сюда вынести дурейшин (время для короткометражек),
// валидацию и прочие константы
import React from "react";

export const durationTime = (movie) =>`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;

export const getCards = (windowSize) => {
    if (windowSize > 1200) {
        return {first: 12, extra: 3};
    } else if (windowSize > 700) {
        return {first: 8, extra: 2};
    } else if (windowSize > 400) {
        return {first: 5, extra: 1};
    }
    return {first: 5, extra: 1};
}

export const EMAIL_PATTERN = '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$';
