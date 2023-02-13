import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import RowContainer from "../../common/layout/RowContainer";
import {WeatherImageSrc, WindImageSrc} from "./constant/imageSrc";
import CardDescription from "./CardDescription";

const LoadingCard = ({loading, data}) => {
    const cardStyle = {
        width: 300,
        marginRight: 15,
        padding: 15
    }
    return (
        <RowContainer>
            <Card
                hoverable
                loading={loading}
                style={cardStyle}
                cover={<img alt="weather" src={WeatherImageSrc.CLOUDY}/>}
            >
                <Meta title="Weather" description={<CardDescription data={data?.weather} type={'weather'}/>}/>
            </Card>
            <Card
                hoverable
                loading={loading}
                style={cardStyle}
                cover={<img alt="wind" src={WindImageSrc.VANE}/>}
            >
                <Meta title="Wind" description={<CardDescription data={data?.wind} type={'wind'}/>}/>
            </Card>
            <Card
                hoverable
                loading={loading}
                style={cardStyle}
                cover={<img alt="precipitation" src={WeatherImageSrc.RAIN}/>}
            >
                <Meta title="PRECIPITATION"
                      description={<CardDescription data={data?.precipitation} type={'precipitation'}/>}/>
            </Card>
        </RowContainer>
    )
}

export default LoadingCard