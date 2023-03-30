import styled from "styled-components";
import {Navigation} from "../../../common/Navigation";
import {List} from "../../../common/list/List";
import {ListItem} from "../../../common/list/ListItem";
import {IconButton} from "../../../common/button/IconButton";
import {ReactComponent as NotificationIcon} from "../../../../assets/svg/icons/notification.svg";
import {ReactComponent as SearchIcon} from "../../../../assets/svg/icons/search.svg";

import React from "react";
import {HeaderProfileDropDown} from "./HeaderProfileDropDown";

const StyledRightSideNav = styled(Navigation)`
  & .header_profile {
      margin-inline-start: 10px;
  }
`

const navIcon = [
    {src: '/images/icons/netflix/notification.svg', component: <SearchIcon width={24} height={24} fill={'white'}/>},
    {src: '/images/icons/netflix/search.svg', component: <NotificationIcon width={24} height={24} fill={'white'}/>},
]

export const HeaderRightSideNav = () => {
    return (
        <StyledRightSideNav>
            <List itemAlign={'row'}>
                {
                    navIcon.map((item, index) => (
                        <ListItem key={`nav-item-${index}`}>
                            <IconButton component={item.component}/>
                        </ListItem>
                    ))
                }
                <ListItem className={`nav-item-${navIcon.length} header_profile`}>
                    <HeaderProfileDropDown/>
                </ListItem>
            </List>
        </StyledRightSideNav>
    )
}