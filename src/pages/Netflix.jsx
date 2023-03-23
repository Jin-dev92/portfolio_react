import {FlexContainer} from "../components/common/layout/FlexContainer";
import {useQuery} from "react-query";
import {getBoxOfficeList} from "../api/api";
import dayjs from "dayjs";
import React from 'react';

const config = {
    params: {
        targetDt: dayjs().clone().subtract(1, "day").format('YYYYMMDD')
    }
}

const Netflix = () => {
    // const [currentUser, setCurrentUser] = React.useState(null)
    const {data} = useQuery('getMovieList', () => getBoxOfficeList(config), {})
    const {dailyBoxOfficeList} = data.data.boxOfficeResult
    return (
        <FlexContainer direction={'column'}>
            {
                dailyBoxOfficeList.map((item, index) => (
                    <div>{JSON.stringify(item)}</div>
                ))
            }
        </FlexContainer>
    )
}

export default Netflix