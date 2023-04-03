import {MovieCardComponent} from "./MovieCardComponent";
import React from "react";
import styled from "styled-components";
import {FlexContainer} from "../../common/layout/FlexContainer";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import {useDispatch} from "react-redux";
// import {setCurrentElement, setModalContent} from "../../../redux/slices/modalSlice";
// import {MovieLargeCardComponent} from "./MovieLargeCardComponent";
// import {HoverModal} from "../../common/modal/HoverModal";

const Wrapper = styled(FlexContainer)`
  width: 100%;
`
const ListTitle = styled.p`
  font-size: 1.4vw;
  line-height: 1.25vw;
  margin: 0 2vw 0.5em;
`

export const MovieListComponent = ({title, dataList, index}) => {
    // const dispatch = useDispatch()
    // const mouseOverHandler = (event, data) => {
    //     dispatch(setCurrentElement({currentElement: event.target}))
    //     dispatch(setModalContent({modalContent: <MovieLargeCardComponent data={data}/>}))
    // }
    // const mouseOutHandler = (event) => {
    //     dispatch(setCurrentElement({currentElement: null}))
    //     dispatch(setModalContent({modalContent: null}))
    // }

    return (
        <Wrapper className={`movie-list-${index}`}>
            <ListTitle>{title}</ListTitle>
            <Splide options={{perPage: 7, pagination: false, type: 'loop', lazyLoad: true}}>
                {
                    dataList.map((data, index) => (
                        <SplideSlide key={`movie_card_splide_slide_${index}`}
                                     // onMouseOver={(event) => mouseOverHandler(event, data)}
                                     // onMouseOut={mouseOutHandler}
                        >
                            <MovieCardComponent data={data}/>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </Wrapper>
    )
}