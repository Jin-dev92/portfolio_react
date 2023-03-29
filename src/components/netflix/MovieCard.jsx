import styled from "styled-components";

const defaultSize = 300
const Wrapper = styled.div`
  width: 15vw;
  //width:100%;
  border-radius: 0 0 8px 8px;

  & > img {
    margin: 0 auto;
  }
`
export const MovieCard = ({data}) => {
    const {backdrop_path} = data
    const rootURL = [process.env.REACT_APP_MOVIE_DB_IMAGE_ROOT, `w${defaultSize}`, backdrop_path].join('/')
    const onClickHandler = (event) => {
        event.preventDefault();

    }
    return (
        <Wrapper onClick={onClickHandler}>
            <img src={rootURL} alt=""/>
        </Wrapper>
    )
}