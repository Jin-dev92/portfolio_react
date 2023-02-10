import axios from "axios";

export const weatherServiceAPI = (config) => axios.get('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst', config)