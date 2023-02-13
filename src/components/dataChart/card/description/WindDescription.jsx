import {Space, Typography} from "antd";
const {Text} = Typography;
// import {ArrowUpOutlined} from "@ant-design/icons";

const WindDescription = ({data}) => {
    const {UUU, VEC, VVV, WSD} = data
    const getWindText = (uuu, vvv) => {
        return [vvv > 0 ? "N" : "S", uuu > 0 ? "E" : "W"].join("")
    }

    return (
        <Space direction={"vertical"}>
            <Text type={'secondary'}>풍향 : {getWindText(UUU, VVV) + [" (", VEC, "deg", ")"].join("")}
                {/*<ArrowUpOutlined rotate={parseInt(VEC)}/>*/}
            </Text>
            <Text type={'secondary'}>풍속 : {WSD} m/s</Text>
        </Space>
    )
}
export default WindDescription