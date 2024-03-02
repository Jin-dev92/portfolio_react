import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props?.direction || "column"};
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;
