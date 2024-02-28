import { Space, Typography } from "antd";
import { SkyDetail } from "../constant/weatherCategory";
const { Text } = Typography;

const WeatherDescription = ({ data }) => {
  const { SKY, REH, TMP } = data;
  return (
    <Space direction={"vertical"}>
      <Text type={"secondary"}>
        {SKY === SkyDetail.SUNNY
          ? "맑음"
          : SKY === SkyDetail.CLOUDY
            ? "구름 많음"
            : SKY === SkyDetail.CLOUD
              ? "흐림"
              : "알 수 없음"}
      </Text>
      <Text type={"secondary"}>습도 : {REH} %</Text>
      <Text type={"secondary"}>현재 기온 : {TMP} °C</Text>
    </Space>
  );
};
export default WeatherDescription;
