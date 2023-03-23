import {APIService} from "./APIService";

export const MovieAPI = new APIService({
    baseURL: 'https://www.kobis.or.kr/kobisopenapi/webservice/rest',
    params: {
        key: process.env.REACT_APP_MOVIE_SERVICE_KEY
    }
})
export const WeatherAPI = new APIService({
    baseURL: 'https://apis.data.go.kr',
    params:{
        serviceKey: process.env.REACT_APP_SERVICE_KEY
    }
})

/*
*  Weather API 목록
* */
export const getCurrentWeather = (config) => WeatherAPI.get('/1360000/VilageFcstInfoService_2.0/getVilageFcst', config)

/*
*  Movie API 목록
* */
export const getBoxOfficeList = (config) => MovieAPI.get('/boxoffice/searchDailyBoxOfficeList.json', config)
export const getMovieDetailById = (config) => MovieAPI.get('/movie/searchMovieInfo.json', config)
