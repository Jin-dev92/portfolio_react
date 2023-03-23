import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {PrecipitationImageSrc, WeatherImageSrc, WindImageSrc} from "./constant/imageSrc";
import CardDescription from "./CardDescription";
import {PrecipitationCategory, PtyDetail, SkyDetail, WeatherCategory, WindCategory} from "./constant/weatherCategory";
import {FlexContainer} from "../../common/layout/FlexContainer";
import {ApiResultCode} from "../../../api/constant/apiResult";

const cardStyle = {
    width: 300,
    marginRight: 15,
    padding: 15
}

const LoadingCard = ({loading, data}) => {
    const {response} = data.data
    // const {header} = response
    // const {resultCode} = header
    const alignData = response.body.items.item.reduce((newObject, object) => {
        if (Object.values(WeatherCategory).includes(object?.category)) {
            newObject['weather'] = {
                ...newObject['weather'],
                [object?.category]: object?.fcstValue
            }
        }
        if (Object.values(WindCategory).includes(object?.category)) {
            newObject['wind'] = {
                ...newObject['wind'],
                [object?.category]: object?.fcstValue
            }
        }
        if (Object.values(PrecipitationCategory).includes(object?.category)) {
            newObject['precipitation'] = {
                ...newObject['precipitation'],
                [object?.category]: object?.fcstValue
            }
        }
        return newObject
    }, {})
    return (
        <FlexContainer direction={'row'}>
            <Card
                hoverable
                loading={loading}
                style={cardStyle}
                cover={<img alt="weather"
                            src={alignData?.weather.SKY === SkyDetail.SUNNY ? WeatherImageSrc.SUNNY : alignData?.weather.SKY === SkyDetail.CLOUDY ? WeatherImageSrc.CLOUDY : WeatherImageSrc.CLOUD}/>}
            >
                <Meta title="Weather" description={<CardDescription data={alignData?.weather} type={'weather'}/>}/>
            </Card>
            <Card
                hoverable
                loading={loading}
                style={cardStyle}
                cover={<img alt="wind" src={WindImageSrc.VANE}/>}
            >
                <Meta title="Wind" description={<CardDescription data={alignData?.wind} type={'wind'}/>}/>
            </Card>
            <Card
                hoverable
                loading={loading}
                style={cardStyle}
                cover={<img alt="precipitation" src={
                    [PtyDetail.SNOW, PtyDetail.RAIN_AND_SNOW].includes(alignData?.precipitation) ? PrecipitationImageSrc.SNOW : PrecipitationImageSrc.RAIN}/>}
            >
                <Meta title="PRECIPITATION"
                      description={<CardDescription data={alignData?.precipitation} type={'precipitation'}/>}/>
            </Card>
        </FlexContainer>
    )
}

export default LoadingCard