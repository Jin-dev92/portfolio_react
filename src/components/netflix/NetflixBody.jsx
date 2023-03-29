import styled from "styled-components";
import {FlexContainer} from "../common/layout/FlexContainer";
import {MovieListComponent} from "./MovieListComponent";
import React from "react";

const NetflixBodyContainer = styled(FlexContainer)`
    padding: 0 5vw
`
const NetflixBody = ({dataList}) => {
    return (
        <NetflixBodyContainer>
            <h1>현재 공사 중 입니다. 👷</h1>
            <MovieListComponent dataList={dataList} title={'인기 순 추천'}/>
        </NetflixBodyContainer>
    )
}

export default NetflixBody