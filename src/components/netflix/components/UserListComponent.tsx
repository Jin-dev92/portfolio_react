import styled from "styled-components";
import { UserComponent } from "./UserComponent";
import GLOBAL_CONFIG from "../../../config";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  & ul li {
    float: left;

    &:not(:last-child) {
      margin-inline-end: 15px;
    }

    & p {
      margin-block-start: 10px;
    }

    &:hover {
      & .profile_name {
        color: white;
      }

      & .profile_image {
        border: 1.5px solid white;
      }
    }
  }

  & ul {
    list-style: none;
  }
`;
const userList = [
  {
    id: 1,
    name: "김의진",
    src: GLOBAL_CONFIG.PUBLIC_URL.concat(
      "/images/icons/profile/default_user_blue.png",
    ),
  },
  {
    id: 2,
    name: "유재석",
    src: GLOBAL_CONFIG.PUBLIC_URL.concat(
      "/images/icons/profile/default_user_yellow.png",
    ),
  },
  {
    id: 3,
    name: "송강호",
    src: GLOBAL_CONFIG.PUBLIC_URL.concat(
      "/images/icons/profile/default_user_red.png",
    ),
  },
];

// const addProfile = {
//     name: "프로필 추가",
//     src: GLOBAL_CONFIG.PUBLIC_URL.concat('/images/icons/profile/plus.png')
// }

export const UserListComponent = () => {
  return (
    <Wrapper>
      <h4>해당 앱은 미완성 상태이며, 지속적으로 업데이트 중입니다.</h4>
      <h1>넷플릭스를 시청할 프로필을 선택하세요.</h1>
      <ul>
        {userList.reduce((acc, currentUser, index) => {
          acc.push(
            <li key={"user_profile_" + index}>
              <a href={null}>
                <UserComponent user={currentUser} />
              </a>
            </li>,
          );
          return acc;
        }, [])}
        {/*<li><UserComponent user={addProfile}/></li>*/}
      </ul>
    </Wrapper>
  );
};
