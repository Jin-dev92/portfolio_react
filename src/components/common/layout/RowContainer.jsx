import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;

const RowContainer = ({children, style}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default RowContainer