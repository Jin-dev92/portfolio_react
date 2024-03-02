import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: ${(props: { position: { top: number; left: number }; animation: any }) =>
    props.position.top}px;
  left: ${(props) => props.position.left}px;
  transform: scale(1.2);
  z-index: 9999;
  transition: 0.1s linear 0.5s;
  animation: ${(props) => props.animation};
`;
