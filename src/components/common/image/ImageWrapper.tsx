import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  width: ${(props) => props?.width};
  height: ${(props) => props?.height};
`;
export const ImageWrapper = ({ children, width, height, className }) => {
  return <Wrapper {...{ width, height, className }}>{children}</Wrapper>;
};
