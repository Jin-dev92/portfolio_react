import styled from "styled-components";
import React from 'react'
import {Link} from "react-router-dom";

const StyledButton = styled.button`
`


export const IconButton = ({children, to, func}) => {
    const clickHandler = (event) => {
        if (!to) {
            event.preventDefault();
        } else {
            if (func) func()
        }
    }
    return (
        <StyledButton onClick={clickHandler}>
            <Link to={to || '#'}>
                {children}
            </Link>
        </StyledButton>
    )
}