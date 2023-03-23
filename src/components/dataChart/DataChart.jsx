import React from 'react'
import {useQuery} from "react-query";
import {weatherServiceAPI} from "../../api/api";
import dayjs from "dayjs";
import {ApiResultCode} from "../../api/constant/apiResult";
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
            serviceKey: process.env.REACT_APP_SERVICE_KEY,
            pageNo: 1,
            dataType: DataType.JSON,
            numOfRows: Object.keys(Object.assign(WeatherCategory, WindCategory, PrecipitationCategory)).length,
            base_date: nearTimeIndex > 0 ? dayjs().format("YYYYMMDD") : dayjs().clone().subtract(1, 'days').format("YYYYMMDD"),
            base_time: releaseTime.at(nearTimeIndex),
            nx: location.X,
            ny: location.Y,
        },
    }

    const [data, setData] = React.useState()
    const {isLoading} = useQuery("weather", () => weatherServiceAPI(config), {
        onSuccess: (data) => {
            const {response} = data.data
            const {header} = response
            const {resultCode} = header
            if (resultCode === ApiResultCode.NORMAL_SERVICE) {
                setData(
                    response.body.items.item.reduce((newObject, object) => {
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
                )

            }
        },
    })

    return (
        <LoadingCard loading={isLoading} data={data}/>
    )
}

export default DataChart