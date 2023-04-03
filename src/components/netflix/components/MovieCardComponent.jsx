import styled from "styled-components";
import {ReactComponent as PlayIcon} from "../../../assets/svg/icons/play-button-arrowhead.svg";
import {IconButton} from "../../common/button/IconButton";
import {ReactComponent as CheckIcon} from "../../../assets/svg/icons/check.svg";
import {ReactComponent as LikeIcon} from "../../../assets/svg/icons/like.svg";
import {ReactComponent as ArrowIcon} from "../../../assets/svg/icons/right-arrow.svg";

const defaultSize = 300
const Wrapper = styled.div`
  width: 15vw;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;

  & .card-info-wrapper {
    display: none;
  }
`
const ImageWrapper = styled.div``
const MoreInfoWrapper = styled.div`
  width: 100%;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    padding: 2vh 0;

    & > li {
      border: 1px solid grey;
      padding: 1vh;
      width: 5.0vh;
      height: 5.0vh;
      max-width: 50px;
      max-height: 50px;
      border-radius: 50px;

      &:not(:last-child) {
        margin-inline-end: 0.2vw;
      }

      &:last-child {
        position: absolute;
        right: 0;

        & svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`
export const MovieCardComponent = ({data}) => {
    const {backdrop_path} = data
    const rootURL = [process.env.REACT_APP_MOVIE_DB_IMAGE_ROOT, `w${defaultSize}`, backdrop_path].join('/')
    const onClickHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Wrapper onClick={onClickHandler}>
            <ImageWrapper>
                <img src={rootURL} alt=""/>
            </ImageWrapper>
            <MoreInfoWrapper className={'card-info-wrapper'}>
                <ul className={'info_button_list'}>
                    <li>
                        <IconButton>
                            <PlayIcon width={'1.25vw'} height={'1.25vw'} fill={'white'}/>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <CheckIcon width={'1.25vw'} height={'1.25vw'} fill={'white'}/>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <LikeIcon width={'1.25vw'} height={'1.25vw'} fill={'white'}/>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <ArrowIcon className={'more-info-arrow-icon'} width={'1.25vw'} height={'1.25vw'}
                                       fill={'white'}/>
                        </IconButton>
                    </li>
                </ul>

            </MoreInfoWrapper>
        </Wrapper>
    )
}