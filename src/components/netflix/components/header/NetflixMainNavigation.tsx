import styled from "styled-components";
import React, {useEffect} from 'react';
import {HeaderRightSideNav} from "./HeaderRightSideNav";
import {HeaderLeftSideNav} from "./HeaderLeftSideNav";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100vw;
  margin: 0;
  padding: 1vh 4%;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .7) 10%, transparent);
  background-color: ${props => props.scrollPosition > 0 ? 'rgb(20, 20, 20)' : 'transparent'};

  & ul {
    display: flex;
    align-items: center;
  }

  & ul li:first-child {
    margin-inline-end: 15px;
  }
`
const NetflixMainNavigation = () => {
    const [scrollPosition, setScrollPosition] = React.useState(window.scrollY || document.documentElement.scrollTop)
    const updateScrollPosition = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollPosition)
        return () => {
            window.removeEventListener('scroll', updateScrollPosition) // unmount 시 이벤트 삭제, 안해줄 경우 다른 페이지 에서도 적용
        }
    }, [])
    return (
        <StyledWrapper scrollPosition={scrollPosition}>
            <HeaderLeftSideNav/>
            <HeaderRightSideNav/>
        </StyledWrapper>
    )
}
export default NetflixMainNavigation
