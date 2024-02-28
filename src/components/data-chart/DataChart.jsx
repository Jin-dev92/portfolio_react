import React from 'react'
import {useQuery} from "react-query";
import {getCurrentWeather} from "../../api/api";
import dayjs from "dayjs";
// import {ApiResultCode} from "../../api/constant/apiResult";
import LoadingCard from "./card/LoadingCard";
import {PrecipitationCategory, WeatherCategory, WindCategory} from "./card/constant/weatherCategory";
import {DataType} from "./card/constant/dataType";

const DataChart = () => {
    const releaseTime = ["0200", "0500", "0800", "1100", "1400", "1700", "2000", "2300"]
    const currentTime = dayjs().clone().format("HH").concat("00")
    releaseTime.push(currentTime)
    releaseTime.sort()
    const nearTimeIndex = releaseTime.findIndex((time) => time === currentTime) - 1
    const location = {
        X: 60,
        Y: 127
    }
    const config = {
        params: {
            pageNo: 1,
            dataType: DataType.JSON,
            numOfRows: Object.keys(Object.assign(WeatherCategory, WindCategory, PrecipitationCategory)).length,
            base_date: nearTimeIndex > 0 ? dayjs().format("YYYYMMDD") : dayjs().clone().subtract(1, 'days').format("YYYYMMDD"),
            base_time: releaseTime.at(nearTimeIndex),
            nx: location.X,
            ny: location.Y,
        },
    }

    const {isLoading, data} = useQuery("getWeather", () => getCurrentWeather(config))

    return (
        <LoadingCard loading={isLoading} data={data}/>
    )
}

export default DataChart