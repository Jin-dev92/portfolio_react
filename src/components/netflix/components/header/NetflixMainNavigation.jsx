import styled from "styled-components";
import React from 'react';
import {useSelector} from "react-redux";
import {HeaderRightSideNav} from "./HeaderRightSideNav";
import {HeaderLeftSideNav} from "./HeaderLeftSideNav";

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
const NetflixMainNavigation = () => {
    const currentUser = useSelector(state => state.userSlice.currentUser)
    console.log(currentUser)
    return (
        <StyledWrapper>
            <HeaderLeftSideNav/>
            <HeaderRightSideNav/>
        </StyledWrapper>
    )
}
export default NetflixMainNavigation
