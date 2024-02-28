export const WeatherCategory = {
  SKY: "SKY", // 상태
  HUMIDITY: "REH", //습도
  TEMPERATURE: "TMP", // 온도
  MAX_TEMPERATURE: "TMX",
  MIN_TEMPERATURE: "TMN",
};

export const WindCategory = {
  WIND_COMPONENTS_EAST_WEST: "UUU",
  WIND_COMPONENTS_SOUTH_NORTH: "VVV",
  WIND_DIRECTION: "VEC",
  WIND_SPEED: "WSD",
};
export const PrecipitationCategory = {
  PRECIPITATION_PER_HOUR: "PCP", // 강수량
  PRECIPITATION_FORM: "PTY",
  PRECIPITATION_RATE: "POP",
  SNOWFALL_RATE: "SNO",
};

export const SkyDetail = {
  SUNNY: "1",
  CLOUDY: "3",
  CLOUD: "4",
};
export const PtyDetail = {
  NOTHING: "0",
  RAIN: "1",
  RAIN_AND_SNOW: "2",
  SNOW: "3",
  HEAVY_RAIN: "4",
};
//     POP	강수 확률	%
//         PTY	강수 형태	코드값
//     PCP	1시간 강수량	범주 (1 mm)
// REH	습도	%
// SNO	1시간 신적설	범주(1 cm)
// SKY	하늘 상태	코드값
// TMP	1시간 기온	℃
// TMN	일 최저기온	℃
// TMX	일 최고기온	℃
// UUU	풍속(동서성분)	m/s
// VVV	풍속(남북성분)	m/s
// WAV	파고	M
// VEC	풍향	deg
// WSD	풍속	m/s
