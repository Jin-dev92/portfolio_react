import {FlexContainer} from "../components/common/layout/FlexContainer";
import {useQuery} from "react-query";
import {getBoxOfficeList} from "../api/api";
import dayjs from "dayjs";
import React from 'react';
import styled from "styled-components";
import {Card} from "antd";
import {UserListComponent} from "../components/netflix/UserListComponent";
import {useSelector} from "react-redux";


const config = {
    params: {
        targetDt: dayjs().clone().subtract(1, "day").format('YYYYMMDD')
    }
}

const NetflixHomeContainer = styled(FlexContainer)`
  height: 100vh;
`

const Netflix = () => {
    const currentUser = useSelector(state => state.userSlice.currentUser)
    const {data} = useQuery('getMovieList', () => getBoxOfficeList(config), {})
    const {dailyBoxOfficeList} = data.data.boxOfficeResult
    return (
        <NetflixHomeContainer direction={'column'}>
            {
                currentUser ?
                    (
                        <div>
                            <h1>현재 공사 중 입니다.</h1>
                            {
                                dailyBoxOfficeList.map((item, index) => (
                                    <Card>
                                        {JSON.stringify(item)}
                                    </Card>
                                ))
                            }
                        </div>
                    ) : (
                        <UserListComponent/>
                    )
            }

        </NetflixHomeContainer>
    )
}

export default Netflix