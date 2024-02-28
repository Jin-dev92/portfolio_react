import {Navigation} from "../../../common/Navigation";
import {List} from "../../../common/list/List";
import {NetflixLogoComponent} from "./NetflixLogoComponent";
import React from "react";
import styled from "styled-components";
import {ListItem} from "../../../common/list/ListItem";
import {IconButton} from "../../../common/button/IconButton";


const StyledListItem = styled(ListItem)`
  padding: 0 1vw;
  font-weight: normal;
  line-height: 1.5vh;
  & p {
    font-size: 0.8vw;
  }
`

export const HeaderLeftSideNav = () => {
    return (
        <Navigation>
            <List itemAlign={'row'}>
                <StyledListItem>
                    <NetflixLogoComponent/>
                </StyledListItem>
                <StyledListItem>
                    <IconButton><p>홈</p></IconButton>
                </StyledListItem>
                <StyledListItem>
                    <IconButton><p>시리즈</p></IconButton>
                </StyledListItem>
                <StyledListItem>
                    <IconButton><p>영화</p></IconButton>
                </StyledListItem>
                <StyledListItem>
                    <IconButton><p>NEW! 요즘 대세 콘텐츠</p></IconButton>
                </StyledListItem>
                <StyledListItem>
                    <IconButton><p>언어별로 찾아보기</p></IconButton>
                </StyledListItem>
            </List>
        </Navigation>

    )
}