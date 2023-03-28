import {FlexContainer} from "../components/common/layout/FlexContainer";
import {useQuery} from "react-query";
import {getPopularMovieList} from "../api/api";
import React from 'react';
import styled from "styled-components";
import {UserListComponent} from "../components/netflix/UserListComponent";
import {useSelector} from "react-redux";
import {MovieListComponent} from "../components/netflix/MovieListComponent";
import AutoPlayVideoComponents from "../components/netflix/AutoPlayVideoComponents";
import NetflixMainNavigation from "../components/netflix/NetflixMainNavigation";


const NetflixHomeContainer = styled.main`
  height: 100vh;
`
const config = {
    params: {
        page: 1,
        region: 'KR'
    }
}
const NetflixBodyContainer = styled(FlexContainer)`
    padding: 0 5vw
`
const Netflix = () => {
    const currentUser = useSelector(state => state.userSlice.currentUser)
    const {data} = useQuery('getPopularMovieList', () => getPopularMovieList(config))
    const movieListSortedByPopular = data.data.results.sort((a, b) => b.popularity - a.popularity)
    const banner = movieListSortedByPopular.sort(() => Math.random() - 0.5)
    return (
        <NetflixHomeContainer>
            {
                currentUser ?
                    (
                        <>
                            <NetflixMainNavigation/>
                            <FlexContainer>
                                <AutoPlayVideoComponents banner={banner[0]}/>
                            </FlexContainer>
                            <NetflixBodyContainer>
                                <h1>현재 공사 중 입니다. 👷</h1>
                                <MovieListComponent dataList={movieListSortedByPopular} title={'인기 순 추천'}/>
                            </NetflixBodyContainer>
                        </>
                    ) : (
                        <UserListComponent/>
                    )
            }

        </NetflixHomeContainer>
    )
}

export default Netflix