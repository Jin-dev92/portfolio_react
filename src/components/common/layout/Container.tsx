import styled from "styled-components";
import {ContainerProps} from "../../../interface/ContainerProps";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props: ContainerProps) => props?.direction || 'row'};
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;