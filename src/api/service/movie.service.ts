import APIService, { createAxiosDefaults } from "../APIService.ts";
import GLOBAL_CONFIG from "../../config";

class MovieService extends APIService {
  constructor() {
    const config: createAxiosDefaults = {
      // https://www.themoviedb.org/documentation/api
      baseURL: GLOBAL_CONFIG.REACT_APP_MOVIE_DB_API_ROOT_URL,
      headers: {
        Authorization: `Bearer ${GLOBAL_CONFIG.REACT_APP_MOVIE_DB_API_ACCESS_TOKEN}`,
      },
      params: {
        language: "ko",
        include_image_language: "ko",
      },
    };
    super(config);
  }

  getSearchMovieByQuery = (config: {}) => this.get<{}>(`/search/movie`, config);
  getPopularMovieList = (config: {}) => this.get(`/movie/popular`, config);
  getTopRatedMovieList = (config: {}) => this.get(`/movie/top_rated`, config);
  getGenresMovieList = (config: {}) => this.get(`/genre/movie/list`, config);
}

export default MovieService;
