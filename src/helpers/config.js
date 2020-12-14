// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// Read more about the API here: https://developers.themoviedb.org/

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'a19fde14eb2f33b545cd78125e338397';

export const SEARCH_ENDPOINT = `${BASE_URL}search/movie?api_key=${API_KEY}&include_adult=false&query=`;
export const POPULAR_ENDPOINT = `${BASE_URL}movie/popular?api_key=${API_KEY}&include_adult=false`;

export const IMAGE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
export const backdrop_size = 'w1280';
// w92, w154, w185, w342, w500, w780, original
export const poster_size = 'w500';
