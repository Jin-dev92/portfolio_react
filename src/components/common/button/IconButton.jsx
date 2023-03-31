import styled from "styled-components";
import React from 'react'

const StyledButton = styled.button`
`


export const IconButton = ({children}) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}