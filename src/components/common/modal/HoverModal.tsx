import React from "react";
import { useAppSelector } from "../../../redux";
import * as Style from "./HoverModal.style.ts";

interface IHoverModalProps {
  children: React.ReactElement;
  animation: any;
}

export const HoverModal = (props: IHoverModalProps) => {
  const { animation, children } = props;
  const currentElement: HTMLCanvasElement = useAppSelector(
    (state) => state.modalSlice.currentElement,
  );
  const modalContent = useAppSelector((state) => state.modalSlice.modalContent);

  return currentElement ? (
    <Style.Wrapper
      animation={animation}
      position={currentElement.getBoundingClientRect()}
    >
      {modalContent}
    </Style.Wrapper>
  ) : null;
};
