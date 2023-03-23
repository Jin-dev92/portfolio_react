import {FlexContainer} from "./layout/FlexContainer";
import Lottie from "lottie-react";
// import animationData from ₩images/spinner/Aniki Hamster.json''
export const Spinner = () => {
    return (
        <FlexContainer>
            <Lottie animationData={`${process.env.PUBLIC_URL}/images/spinner/Aniki Hamster.json`}></Lottie>
        </FlexContainer>
    )
}