import styled from "styled-components";
import React from 'react';
import {useSelector} from "react-redux";

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.position.top}px;
  left: ${props => props.position.left}px;
  transform: scale(1.2);
  z-index: 9999;
  transition: 0.1s linear 0.5s;
  animation: ${props => props.animation};
`
export const HoverModal = ({children, animation}) => {
    const currentElement = useSelector(state => state.modalSlice.currentElement)
    const modalContent = useSelector(state => state.modalSlice.modalContent)

    return (
        currentElement ?
            <Wrapper animation={animation} position={currentElement.getBoundingClientRect()}>
                {modalContent}
            </Wrapper> : null
    )
}