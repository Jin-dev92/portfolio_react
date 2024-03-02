import GLOBAL_CONFIG from "../config";
import APIService from "./APIService";

export const WeatherAPI = new APIService({
  baseURL: "https://apis.data.go.kr",
  params: {
    serviceKey: GLOBAL_CONFIG.REACT_APP_SERVICE_KEY,
  },
});

export const THEMovieDBAPI = new APIService({
  // https://www.themoviedb.org/documentation/api
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: "Bearer ".concat(
      GLOBAL_CONFIG.REACT_APP_MOVIE_DB_API_ACCESS_TOKEN,
    ),
  },
  params: {
    language: "ko",
    include_image_language: "ko",
  },
});
/*
 *  Weather API 목록
 * */
export const getCurrentWeather = (config) =>
  WeatherAPI.get("/1360000/VilageFcstInfoService_2.0/getVilageFcst", config);

/*
 *  Movie API 목록
 * */

export const getSearchMovieByQuery = (config) =>
  THEMovieDBAPI.get(`/search/movie`, config);
export const getPopularMovieList = (config) =>
  THEMovieDBAPI.get(`/movie/popular`, config);
export const getTopRatedMovieList = (config) =>
  THEMovieDBAPI.get(`/movie/top_rated`, config);
export const getGenresMovieList = (config) =>
  THEMovieDBAPI.get(`/genre/movie/list`, config);
