import WindDescription from "./description/WindDescription";
import WeatherDescription from "./description/WeatherDescription";
import PrecipitationDescription from "./description/PrecipitationDescription";

const CardDescription = ({ data, type }) => {
  if (data === undefined) return null;
  switch (type) {
    case "weather":
      return <WeatherDescription data={data} />;
    case "wind":
      return <WindDescription data={data} />;
    case "precipitation":
      return <PrecipitationDescription data={data} />;
    default:
      return null;
  }
};

export default CardDescription;
