import {MovieCard} from "./MovieCard";
import React from "react";
import styled from "styled-components";
import {FlexContainer} from "../common/layout/FlexContainer";


const ListComponent = styled.ul`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`
const Wrapper = styled(FlexContainer)`
  width: 100%;
`
const ListTitle = styled.p`
  font-size: 1.4vw;
  line-height: 1.25vw;
  margin: 0 2vw 0.5em;
`

export const MovieListComponent = ({title, dataList}) => {
    return (
        <Wrapper>
            <ListTitle>{title}</ListTitle>
            <ListComponent>
                {
                    dataList?.map((item, index) => (
                        <li key={`movie_card_${index}`}>
                            <MovieCard data={item}/>
                        </li>
                    ))
                }
            </ListComponent>
        </Wrapper>
    )
}