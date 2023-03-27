import {Navigation} from "../common/Navigation";
import {List} from "../common/list/List";
import {ListItem} from "../common/list/ListItem";
import styled from "styled-components";
import React from 'react';
import {NetflixLogo} from "./NetflixLogo";
import {IconButton} from "../common/button/IconButton";
// import {NotificationIconSVG, SearchIconSVG} from "../svg/SVG";

const StyledAnchor = styled.a`
  text-decoration: none
`
const StyledHeader = styled.header`
  display: flex;
  //flex-direction: row;
  width: 100vw;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

const StyledListItem = styled(ListItem)`
  padding: 8px 10px;
  font-weight: normal;
`
const navIcon = [
    {src: '/images/icons/netflix/notification.svg', },
    {src: '/images/icons/netflix/search.svg', },
]
const NetflixMainNavigation = () => {
    return (
        <StyledHeader>
            <Navigation>
                <List itemAlign={'row'}>
                    <StyledListItem>
                        <NetflixLogo/>
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
            <Navigation>
                <Navigation>
                    <List itemAlign={'row'}>
                        {
                            navIcon.map((item, index) => (
                                <ListItem key={`nav-item-${index}`}>
                                    <IconButton src={item.src} func={() => console.log('temp')}/>
                                </ListItem>
                            ))
                        }
                    </List>
                </Navigation>
            </Navigation>
        </StyledHeader>
    )
}
export default NetflixMainNavigation
