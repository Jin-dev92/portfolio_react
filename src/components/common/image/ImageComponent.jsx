import styled from "styled-components";

export const ImageComponent = styled.div`
  background-image: url(${props => props?.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  max-width: 200px;
  max-height: 200px;
`