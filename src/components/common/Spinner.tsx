import React from "react";
import { FlexContainer } from "./layout/FlexContainer";
import Lottie from "lottie-react";

export const Spinner = () => {
  return (
    <FlexContainer>
      <Lottie
        animationData={`${process.env.PUBLIC_URL}/images/spinner/Aniki Hamster.json`}
      ></Lottie>
    </FlexContainer>
  );
};
