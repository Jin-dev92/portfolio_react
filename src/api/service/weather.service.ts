import APIService, { createAxiosDefaults } from "../APIService.ts";
import GLOBAL_CONFIG from "../../config";
import { GetCurrentWeatherDto } from "./dto/get-current-weather.dto.ts";

class WeatherService extends APIService {
  constructor() {
    const config: createAxiosDefaults = {
      baseURL: GLOBAL_CONFIG.REACT_APP_WEATHER_API_ROOT_URL,
      params: {
        serviceKey: GLOBAL_CONFIG.REACT_APP_SERVICE_KEY,
      },
    };
    super(config);
  }
  getCurrentWeather = (config: GetCurrentWeatherDto) => {
    return this.get<{}, GetCurrentWeatherDto>(
      "/1360000/VilageFcstInfoService_2.0/getVilageFcst",
      config,
    );
  };
}
