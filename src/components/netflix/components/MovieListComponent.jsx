import {MovieCardComponent} from "./MovieCardComponent";
import React from "react";
import styled from "styled-components";
import {FlexContainer} from "../../common/layout/FlexContainer";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {MovieCardInfoComponent} from "./MovieCardInfoComponent";

const Wrapper = styled(FlexContainer)`
  width: 100%;
`
const ListTitle = styled.p`
  font-size: 1.4vw;
  line-height: 1.25vw;
  margin: 0 2vw 0.5em;
`

export const MovieListComponent = ({title, dataList, index}) => {
    return (
        <Wrapper className={`movie-list-${index}`}>
            <ListTitle>{title}</ListTitle>
            <Splide options={{perPage: 7, pagination: false, type: 'loop', lazyLoad: true}}>
                {
                    dataList.map((data, index) => (
                        <SplideSlide key={`movie_card_splide_slide_${index}`} className={'test'}>
                            <MovieCardComponent data={data}/>
                            {/*<MovieCardInfoComponent/>*/}
                        </SplideSlide>
                    ))
                }
            </Splide>
        </Wrapper>
    )
}