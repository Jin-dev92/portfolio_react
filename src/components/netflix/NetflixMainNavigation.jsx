import {Navigation} from "../common/Navigation";
import {List} from "../common/list/List";
import {ListItem} from "../common/list/ListItem";
import styled from "styled-components";
import React from 'react';
import {NetflixLogo} from "./NetflixLogo";
import {IconButton} from "../common/button/IconButton";
import {ReactComponent as NotificationIcon} from "../../assets/svg/icons/notification.svg";
import {ReactComponent as SearchIcon} from "../../assets/svg/icons/search.svg";

const StyledAnchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`
const StyledWrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0;
  padding: 0 4%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  & ul {
    display: flex;
    align-items: center;
  }

  & ul li:first-child {
    margin-inline-end: 15px;
  }
`

const StyledListItem = styled(ListItem)`
  padding: 0 10px;
  font-weight: normal;
`

const StyledRightSideNav = styled(Navigation)`
  & ul li {
    //margin-inline-end: 10px;
  }
`
const navIcon = [
    {src: '/images/icons/netflix/search.svg', component: <NotificationIcon width={32} height={32} fill={'white'}/>},
    {src: '/images/icons/netflix/notification.svg', component: <SearchIcon width={32} height={32} fill={'white'}/>},
]
const NetflixMainNavigation = () => {
    return (
        <StyledWrapper>
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
            <StyledRightSideNav>
                <List itemAlign={'row'}>
                    {
                        navIcon.map((item, index) => (
                            <ListItem key={`nav-item-${index}`}>
                                <IconButton component={item.component}/>
                            </ListItem>
                        ))
                    }
                </List>
            </StyledRightSideNav>
        </StyledWrapper>
    )
}
export default NetflixMainNavigation
