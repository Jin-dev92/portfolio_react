import {IconButton} from "../common/button/IconButton";
import React from "react";
import styled from "styled-components";
// import {ReactComponent as Logo} from "../../assets/svg/netflix_logo_64.svg";

const StyledImage = styled.img`
`
const Wrapper = styled.div`
  width: 95px;
`
export const NetflixLogo = () => {
    const onClickHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Wrapper>
            <IconButton func={onClickHandler} component={<StyledImage src={'/images/icons/netflix/netflix_logo.png'}/>}/>
        </Wrapper>
    )
}