import * as dotenv from "dotenv";

dotenv.config();

const GLOBAL_CONFIG = {
  environment: process.env.NODE_ENV,
  PUBLIC_URL: process.env.PUBLIC_URL ?? "http://localhost:8080",

  REACT_APP_SERVICE_KEY: process.env.REACT_APP_SERVICE_KEY,

  REACT_APP_WEATHER_API_ROOT_URL: process.env.REACT_APP_WEATHER_API_ROOT_URL,
  REACT_APP_MOVIE_DB_API_ROOT_URL: process.env.REACT_APP_MOVIE_DB_API_ROOT_URL,

  REACT_APP_MOVIE_DB_API_KEY: process.env.REACT_APP_MOVIE_DB_API_KEY,
  REACT_APP_MOVIE_SERVICE_KEY: process.env.REACT_APP_MOVIE_SERVICE_KEY,
  REACT_APP_MOVIE_DB_IMAGE_ROOT: process.env.REACT_APP_MOVIE_DB_IMAGE_ROOT,
  REACT_APP_MOVIE_DB_API_ACCESS_TOKEN:
    process.env.REACT_APP_MOVIE_DB_API_ACCESS_TOKEN,
};
export default GLOBAL_CONFIG;