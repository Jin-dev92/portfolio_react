import {FlexContainer} from "../components/common/layout/FlexContainer";
import {useQuery} from "react-query";
import {getBoxOfficeList} from "../api/api";
import dayjs from "dayjs";
import React from 'react';
import styled from "styled-components";
import {UserListComponent} from "../components/netflix/UserListComponent";
import {useSelector} from "react-redux";
import {MovieCard} from "../components/netflix/MovieCard";
import {List} from "../components/common/list/List";
import {ListItem} from "../components/common/list/ListItem";
import {MovieListComponent} from "../components/netflix/MovieListComponent";


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
                        <FlexContainer>
                            <h1>현재 공사 중 입니다. 👷</h1>
                            <MovieListComponent dataList={dailyBoxOfficeList}/>
                        </FlexContainer>
                    ) : (
                        <UserListComponent/>
                    )
            }

        </NetflixHomeContainer>
    )
}

export default Netflix