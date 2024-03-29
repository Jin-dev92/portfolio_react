import styled from "styled-components";
import { IconButton } from "../../common/button/IconButton";
import { ReactComponent as PlayIcon } from "../../../assets/svg/icons/play-button-arrowhead.svg";
import { ReactComponent as InformationIcon } from "../../../assets/svg/icons/information.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  top: 30%;
  left: 5%;
  width: 100vw;
  font-size: 1.2vw;
`;
const ContentWrapper = styled.div`
  width: 40vw;
`;
const StyledArticle = styled.article`
  .banner-title {
    font-weight: bold;
    font-size: 2.5vw;
  }

  @media (max-width: 768px) {
    .banner-overview {
      display: none;
    }
  }
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-block-start: 1vw;
  width: 25vw;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-weight: bold;
  max-width: 200px;
  min-width: 100px;
  max-height: 100px;

  &[role="play"] {
    color: black;
    background-color: white;
    margin-inline-end: 1vw;
  }

  &[role="info"] {
    background-color: rgba(109, 109, 110, 0.7);
  }

  & .banner-icon {
    margin-inline-end: 10px;
  }
`;
// const StyledAside = styled.aside`
//   display: flex;
//   flex-direction: row;
//   position: absolute;
//   top: 50%;
//   right: 8%;
// `
export const VideoComponentOverBanner = ({ banner }) => {
  const { title, overview } = banner;
  return (
    <Wrapper>
      <ContentWrapper>
        <StyledArticle>
          <p className={"banner-title"}>{title}</p>
          <p className={"banner-overview"}>{overview}</p>
        </StyledArticle>
        <StyledSection>
          <IconButton>
            <ButtonWrapper role={"play"}>
              <PlayIcon
                width={"1.5vw"}
                height={"1.5vw"}
                fill={"black"}
                className={"banner-icon"}
              />
              <p>재생</p>
            </ButtonWrapper>
          </IconButton>
          <IconButton>
            <ButtonWrapper role={"info"}>
              <InformationIcon
                width={"1.5vw"}
                height={"1.5vw"}
                fill={"white"}
                className={"banner-icon"}
              />
              <p>상세 보기</p>
            </ButtonWrapper>
          </IconButton>
        </StyledSection>
      </ContentWrapper>
      {/*<StyledAside>*/}
      {/*    <IconButton>*/}
      {/*        테스트*/}
      {/*    </IconButton>*/}
      {/*</StyledAside>*/}
    </Wrapper>
  );
};
