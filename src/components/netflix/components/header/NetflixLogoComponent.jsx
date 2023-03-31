import React from "react";
import styled from "styled-components";
import {IconButton} from "../../../common/button/IconButton";
// import {ReactComponent as Logo} from "../../assets/svg/netflix_logo_64.svg";

const absoluteUrl = '/images/icons/netflix/Netflix_logo.png'
const Logo = styled.div`
  width: 5vw;
  height: 5vh;
  background: url(${absoluteUrl}) no-repeat center;
  background-size: cover;
  max-width: 100px;
  max-height: 100%;
`
export const NetflixLogoComponent = () => {
    return (
        <IconButton to={'/netflix'}>
            <Logo/>
        </IconButton>
    )

}