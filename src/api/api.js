import { APIService } from "./APIService";
import GLOBAL_CONFIG from "../config";

export const MovieAPI = new APIService({
  baseURL: "https://www.kobis.or.kr/kobisopenapi/webservice/rest",
  params: {
    key: GLOBAL_CONFIG.REACT_APP_MOVIE_SERVICE_KEY,
  },
});
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
export const getBoxOfficeList = (config) =>
  MovieAPI.get("/boxoffice/searchDailyBoxOfficeList.json", config);
export const getMovieDetailById = (config) =>
  MovieAPI.get("/movie/searchMovieInfo.json", config);

export const getSearchMovieByQuery = (config) =>
  THEMovieDBAPI.get(`/search/movie`, config);
export const getPopularMovieList = (config) =>
  THEMovieDBAPI.get(`/movie/popular`, config);
export const getTopRatedMovieList = (config) =>
  THEMovieDBAPI.get(`/movie/top_rated`, config);
export const getGenresMovieList = (config) =>
  THEMovieDBAPI.get(`/genre/movie/list`, config);
