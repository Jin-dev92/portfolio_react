import styled from "styled-components";
import React from "react";

const defaultSize = 300;
const Wrapper = styled.div`
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const ImageWrapper = styled.div``;
export const MovieCardComponent = ({ data }) => {
  const { backdrop_path } = data;
  const rootURL = [
    process.env.REACT_APP_MOVIE_DB_IMAGE_ROOT,
    `w${defaultSize}`,
    backdrop_path,
  ].join("/");

  const onClickHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Wrapper onClick={onClickHandler}>
      <ImageWrapper>
        <img src={rootURL} alt="" />
      </ImageWrapper>
    </Wrapper>
  );
};
