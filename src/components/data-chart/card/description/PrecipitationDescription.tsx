import { Space, Typography } from "antd";
import { PtyDetail } from "../constant/weatherCategory";

const { Text } = Typography;

const PrecipitationDescription = ({ data }) => {
  const { POP, PTY, PCP, SNO } = data;
  return (
    <Space direction={"vertical"}>
      <Text type={"secondary"}>강수 확률 : {POP} %</Text>
      <Text type={"secondary"}>
        강수 형태 :{" "}
        {PTY === PtyDetail.NOTHING
          ? "없음"
          : PTY === PtyDetail.RAIN
            ? "비"
            : PTY === PtyDetail.RAIN_AND_SNOW
              ? "비/눈"
              : PTY === PtyDetail.SNOW
                ? "눈"
                : PTY === PtyDetail.HEAVY_RAIN
                  ? "소나기"
                  : "알 수 없음"}
      </Text>
      {[PtyDetail.SNOW, PtyDetail.RAIN_AND_SNOW].includes(PTY) ? (
        <Text type={"secondary"}>시간당 강설량 : {SNO}</Text>
      ) : (
        <Text type={"secondary"}>시간당 강수량 : {PCP}</Text>
      )}
    </Space>
  );
};
export default PrecipitationDescription;
