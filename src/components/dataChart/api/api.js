import axios from "axios";

export const weatherServiceAPI = (config) => axios.get('/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst', config)