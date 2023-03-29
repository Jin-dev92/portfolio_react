import NetflixMainNavigation from "./NetflixMainNavigation";
import {FlexContainer} from "../common/layout/FlexContainer";
import AutoPlayVideoComponents from "./AutoPlayVideoComponents";
import React from "react";

const NetflixHeader = ({randomBanner}) => {
    return (
        <React.Fragment>
            <NetflixMainNavigation/>
            <FlexContainer>
                <AutoPlayVideoComponents banner={randomBanner}/>
            </FlexContainer>
        </React.Fragment>
    )
}
export default NetflixHeader