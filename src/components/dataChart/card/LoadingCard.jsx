import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {PrecipitationImageSrc, WeatherImageSrc, WindImageSrc} from "./constant/imageSrc";
import CardDescription from "./CardDescription";
import {PtyDetail, SkyDetail} from "./constant/weatherCategory";
import {Container} from "../../common/layout/Container";

const LoadingCard = ({loading, data}) => {
    const cardStyle = {
        width: 300,
        marginRight: 15,
        padding: 15
    }

    return (
        <Container direction={'row'}>
            <Card
                hoverable
                loading={loading}
                style={cardStyle}
                cover={<img alt="weather"
                            src={data?.weather.SKY === SkyDetail.SUNNY ? WeatherImageSrc.SUNNY : data?.weather.SKY === SkyDetail.CLOUDY ? WeatherImageSrc.CLOUDY : WeatherImageSrc.CLOUD}/>}
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
                cover={<img alt="precipitation" src={
                    [PtyDetail.SNOW, PtyDetail.RAIN_AND_SNOW].includes(data?.precipitation) ? PrecipitationImageSrc.SNOW : PrecipitationImageSrc.RAIN}/>}
            >
                <Meta title="PRECIPITATION"
                      description={<CardDescription data={data?.precipitation} type={'precipitation'}/>}/>
            </Card>
        </Container>
    )
}

export default LoadingCard