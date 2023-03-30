import styled from "styled-components";
import {Navigation} from "../../../common/Navigation";
import {List} from "../../../common/list/List";
import {ListItem} from "../../../common/list/ListItem";
import {IconButton} from "../../../common/button/IconButton";
import {ReactComponent as NotificationIcon} from "../../../../assets/svg/icons/notification.svg";
import {ReactComponent as SearchIcon} from "../../../../assets/svg/icons/search.svg";

import React from "react";

const StyledRightSideNav = styled(Navigation)`
`

const navIcon = [
    {src: '/images/icons/netflix/search.svg', component: <NotificationIcon width={32} height={32} fill={'white'}/>},
    {src: '/images/icons/netflix/notification.svg', component: <SearchIcon width={32} height={32} fill={'white'}/>},
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
            </List>
        </StyledRightSideNav>
    )
}