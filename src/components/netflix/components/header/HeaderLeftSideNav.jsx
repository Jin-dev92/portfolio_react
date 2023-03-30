import {Navigation} from "../../../common/Navigation";
import {List} from "../../../common/list/List";
import {NetflixLogoComponent} from "./NetflixLogoComponent";
import React from "react";
import styled from "styled-components";
import {ListItem} from "../../../common/list/ListItem";

const StyledAnchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  `

const StyledListItem = styled(ListItem)`
  padding: 0 10px;
  font-weight: normal;
`

export const HeaderLeftSideNav = () => {
    return (
        <Navigation>
            <List itemAlign={'row'}>
                <StyledListItem>
                    <NetflixLogoComponent/>
                </StyledListItem>
                <StyledListItem>
                    <StyledAnchor><p>홈</p></StyledAnchor>
                </StyledListItem>
                <StyledListItem>
                    <StyledAnchor><p>시리즈</p></StyledAnchor>
                </StyledListItem>
                <StyledListItem>
                    <StyledAnchor><p>영화</p></StyledAnchor>
                </StyledListItem>
                <StyledListItem>
                    <StyledAnchor><p>NEW! 요즘 대세 콘텐츠</p></StyledAnchor>
                </StyledListItem>
                <StyledListItem>
                    <StyledAnchor><p>언어별로 찾아보기</p></StyledAnchor>
                </StyledListItem>
            </List>
        </Navigation>

    )
}