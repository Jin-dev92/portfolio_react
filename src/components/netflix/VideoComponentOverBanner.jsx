import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1000;
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
    const {title, overview} = banner
    console.log(banner)
        // , original_title, release_title, poster_path
    return (
        <Wrapper>
            <StyledArticle>
                <p className={'banner-title'}>{title}</p>
                <p>{overview}</p>
            </StyledArticle>
        </Wrapper>
    )
}