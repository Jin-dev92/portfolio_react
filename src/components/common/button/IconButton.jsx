import styled from "styled-components";
import React from 'react'

const StyledButton = styled.button`
`


export const IconButton = ({component}) => {
    return (
        <StyledButton>
            {component}
        </StyledButton>
    )
}