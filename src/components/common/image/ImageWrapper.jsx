import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
`
export const ImageWrapper = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}