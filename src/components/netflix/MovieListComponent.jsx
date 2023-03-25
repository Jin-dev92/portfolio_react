// import {List} from "../common/list/List";
// import {ListItem} from "../common/list/ListItem";
import {MovieCard} from "./MovieCard";
import React from "react";
import styled from "styled-components";


const ListComponent = styled.ul`
  display: flex;
  overflow: scroll;
  & li {
   margin-inline-end: 7px;
  }
`
export const MovieListComponent = ({dataList}) => {
    return (
        <ListComponent>
            {
                dataList?.map((item, index) => (
                    <li key={`movie_card_${index}`}>
                        <MovieCard data={item}/>
                    </li>
                ))
            }
        </ListComponent>
    )
}