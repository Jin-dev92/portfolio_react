import styled from "styled-components";
import React from 'react'
import {Link} from "react-router-dom";

const StyledButton = styled.button`
`


export const IconButton = ({children, to}) => {
    return (
        <StyledButton>
            <Link to={to || '#'}>
                {children}
            </Link>
        </StyledButton>
    )
}