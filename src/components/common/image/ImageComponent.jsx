import styled from "styled-components";

export const ImageComponent = styled.div`
  background-image: url(${props => props?.src});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  width: 10vw;
  height: 10vw;
  position: relative;
  max-width: 200px;
  max-height: 200px;
`