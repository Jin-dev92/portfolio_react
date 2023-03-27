import styled from "styled-components";
import React from 'react'
// import {NotificationIconSVG} from "../../svg/SVG";

const StyledButton = styled.button`
`
export const IconButton = ({src, func, imageComponent}) => {
    // console.log(process)
    // appPublic
    const onClickHandler = (event) => {
        event.preventDefault()
        if (func) func()
    }
    return (
        <StyledButton onClick={onClickHandler}>
            {/*<ReactComponent fill={'white'}></ReactComponent>*/}
        </StyledButton>
    )
}