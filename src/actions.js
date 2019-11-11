export const toggleCards = (shouldShow) => ({
    type: 'toggleCards',
    shouldShow,
});

export const setMostPopularMovies = (list) => ({
    type: 'setMostPopularMovies',
    list,
});

export const setGenres = (genres) => ({
    type: 'setGenres',
    genres,
});

export const setLike = (movieId) => ({
    type: 'setLike',
    movieId,
});

export const unLike = (movieId) => ({
    type: 'unLike',
    movieId,
});