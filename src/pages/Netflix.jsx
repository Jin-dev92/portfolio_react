import {FlexContainer} from "../components/common/layout/FlexContainer";
import {useQuery} from "react-query";
import {getBoxOfficeList} from "../api/api";
import dayjs from "dayjs";
import React from 'react';
import styled from "styled-components";
import {Card} from "antd";
import {UserListComponent} from "../components/netflix/UserListComponent";


const config = {
    params: {
        targetDt: dayjs().clone().subtract(1, "day").format('YYYYMMDD')
    }
}

const NetflixHomeContainer = styled(FlexContainer)`
  height: 100vh;
`

const Netflix = () => {
    const [currentUser, setCurrentUser] = React.useState(null) //@todo redux 로 처리 하는게 나을 듯
    const {data} = useQuery('getMovieList', () => getBoxOfficeList(config), {})
    const {dailyBoxOfficeList} = data.data.boxOfficeResult
    return (
        <NetflixHomeContainer direction={'column'}>
            {
                currentUser ?
                    dailyBoxOfficeList.map((item, index) => (
                        <Card>

                        </Card>
                    )) : (
                        <UserListComponent/>
                    )
            }

        </NetflixHomeContainer>
    )
}

export default Netflix