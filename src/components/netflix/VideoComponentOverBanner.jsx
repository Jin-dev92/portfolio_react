import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 9999;
  top: 30%;
  left: 5%;
  width: 40vw;
`
const StyledArticle = styled.article`
  //position: absolute;
  //bottom: 30%;
  //left: 10%;
`
export const VideoComponentOverBanner = ({banner}) => {
    const {title, overview, original_title, release_title, poster_path} = banner
    return (
        <Wrapper>
            <StyledArticle>
                <h4>{title}</h4>
                <p>{overview}</p>
            </StyledArticle>
        </Wrapper>
    )
}