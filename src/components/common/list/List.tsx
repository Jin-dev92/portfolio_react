import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${(props) => props.itemAlign};
  justify-content: center;
  align-items: center;
`;
