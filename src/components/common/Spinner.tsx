import React from "react";
import { FlexContainer } from "./layout/FlexContainer";
import Lottie from "lottie-react";
import GLOBAL_CONFIG from "../../config";

export const Spinner = () => {
  return (
    <FlexContainer>
      <Lottie
        animationData={`${GLOBAL_CONFIG.PUBLIC_URL}/images/spinner/Aniki Hamster.json`}
      ></Lottie>
    </FlexContainer>
  );
};
