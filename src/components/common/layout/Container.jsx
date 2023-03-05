import styled from "styled-components";

export const Container = ({direction = 'column'}) => styled.div`
  display: flex;
  flex-direction: ${direction};
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;