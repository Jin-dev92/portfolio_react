import {MovieCardComponent} from "./MovieCardComponent";
import React from "react";
import styled from "styled-components";
import {FlexContainer} from "../../common/layout/FlexContainer";
import {Splide, SplideSlide} from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// or only core styles
// import '@splidejs/react-splide/css/core';
// import {ReactComponent as LeftArrowIcon} from "../../assets/svg/icons/left-arrow.svg";
// import {ReactComponent as RightArrowIcon} from "../../assets/svg/icons/right-arrow.svg";

// const ListComponent = styled.ul`
//   display: flex;
//   overflow: hidden;
//   position: relative;
//
//   & > .list-nav {
//     display: none;
//   }
//
//   &:hover > .list-nav {
//     display: block;
//   }
// `
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
                        <SplideSlide key={`movie_card_splide_slide_${index}`} >
                            <MovieCardComponent data={data}/>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </Wrapper>
    )
}