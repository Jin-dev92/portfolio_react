import NetflixMainNavigation from "./NetflixMainNavigation";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
    
`
const NetflixHeader = ({randomBanner}) => {
    return (
        <Header>
            <NetflixMainNavigation/>
        </Header>
    )
}
export default NetflixHeader