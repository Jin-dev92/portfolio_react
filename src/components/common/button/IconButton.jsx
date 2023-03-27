import styled from "styled-components";
import React from 'react'

const StyledButton = styled.button`
`


export const IconButton = ({src, func, width, height, component}) => {
    const onClickHandler = (event) => {
        event.preventDefault()
        if (func) func()
    }
    return (
        <StyledButton onClick={onClickHandler}>
            {component}
        </StyledButton>
    )
}