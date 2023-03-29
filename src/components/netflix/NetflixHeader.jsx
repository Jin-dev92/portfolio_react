import NetflixMainNavigation from "./NetflixMainNavigation";
import {FlexContainer} from "../common/layout/FlexContainer";
import AutoPlayVideoComponents from "./AutoPlayVideoComponents";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
    
`
const NetflixHeader = ({randomBanner}) => {
    return (
        <Header>
            <NetflixMainNavigation/>
            <FlexContainer>
                <AutoPlayVideoComponents banner={randomBanner}/>
            </FlexContainer>
        </Header>
    )
}
export default NetflixHeader