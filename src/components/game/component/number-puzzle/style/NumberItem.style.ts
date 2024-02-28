import styled from "styled-components";

export const NumberWrapper = styled.div`
  width: 6vw;
  height: 6vw;
  line-height: 6vw;
  background-color: ${(props) => (props.children ? "orange" : "transparent")};
  margin: 0 auto;
  text-align: center;
  font-size: 2vw;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.children ? "10px 10px 5px 0 rgba(0,0,0,0.75)" : undefined};
`;
