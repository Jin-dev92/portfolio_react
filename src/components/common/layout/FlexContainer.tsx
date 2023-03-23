import styled from "styled-components";
import {Property} from "csstype";


type ContainerProps =  {
    direction: Property.Direction | undefined;
}

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props: ContainerProps) => props?.direction || 'column'};
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;