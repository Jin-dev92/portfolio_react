import styled from "styled-components";
import React from "react";
import { IconButton } from "../../common/button/IconButton";
import { ReactComponent as PlayIcon } from "../../../assets/svg/icons/play-button-arrowhead.svg";
import { ReactComponent as CheckIcon } from "../../../assets/svg/icons/check.svg";
import { ReactComponent as LikeIcon } from "../../../assets/svg/icons/like.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/svg/icons/right-arrow.svg";

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
      width: 5vh;
      height: 5vh;
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
`;
export const MovieCardInfoComponent = ({ data }) => {
  return (
    <MoreInfoWrapper className={"card-info-wrapper"}>
      <ul className={"info_button_list"}>
        <li>
          <IconButton>
            <PlayIcon width={"1.25vw"} height={"1.25vw"} fill={"white"} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <CheckIcon width={"1.25vw"} height={"1.25vw"} fill={"white"} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <LikeIcon width={"1.25vw"} height={"1.25vw"} fill={"white"} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <ArrowIcon
              className={"more-info-arrow-icon"}
              width={"1.25vw"}
              height={"1.25vw"}
              fill={"white"}
            />
          </IconButton>
        </li>
      </ul>
    </MoreInfoWrapper>
  );
};
