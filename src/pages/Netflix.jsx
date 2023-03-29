import {useQuery} from "react-query";
import {getPopularMovieList} from "../api/api";
import React from 'react';
import styled from "styled-components";
import {UserListComponent} from "../components/netflix/UserListComponent";
import {useSelector} from "react-redux";
import NetflixBody from "../components/netflix/NetflixBody";
import NetflixHeader from "../components/netflix/NetflixHeader";


const NetflixHomeContainer = styled.main`
  height: 100vh;
`
const config = {
    params: {
        page: 1,
        region: 'KR'
    }
}
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
                        <React.Fragment>
                            <NetflixHeader randomBanner={banner[0]}/>
                            <NetflixBody dataList={movieListSortedByPopular}/>
                        </React.Fragment>
                    ) : (
                        <UserListComponent/>
                    )
            }

        </NetflixHomeContainer>
    )
}

export default Netflix