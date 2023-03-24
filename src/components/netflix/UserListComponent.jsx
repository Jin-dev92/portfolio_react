import styled from "styled-components";
import {UserComponent} from "./UserComponent";

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


`
const userList = [
    {
        name: '김의진',
        src: process.env.PUBLIC_URL.concat('/images/icons/profile/default_user_blue.png')
    },
    {
        name: '유재석',
        src: process.env.PUBLIC_URL.concat('/images/icons/profile/default_user_yellow.png')
    },
    {
        name: '송강호',
        src: process.env.PUBLIC_URL.concat('/images/icons/profile/default_user_red.png')
    },
]

// const addProfile = {
//     name: "프로필 추가",
//     src: process.env.PUBLIC_URL.concat('/images/icons/profile/plus.png')
// }

export const UserListComponent = () => {
    const onClickAnchorHandler = (event) => {
        event.preventDefault();
        // redux 로 현재 선택된 유저를 바꿔 준다.
    }

    return (
        <Wrapper>
            <h1>넷플릭스를 시청할 프로필을 선택하세요.</h1>
            <ul>
                {
                    userList.reduce((acc, currentUser, index) => {
                        acc.push(
                            <li key={'user_profile_' + index}>
                                <a href={'#'} onClick={onClickAnchorHandler}>
                                    <UserComponent user={currentUser}/>
                                </a>
                            </li>
                        )
                        return acc
                    }, [])
                }
                {/*<li><UserComponent user={addProfile}/></li>*/}
            </ul>
        </Wrapper>
    )
}