import {useSelector} from "react-redux";
import styled from "styled-components";
import {ImageWrapper} from "../../../common/image/ImageWrapper";
import {Dropdown} from "antd";
import {ReactComponent as LeftArrowIcon} from "../../../../assets/svg/icons/left-arrow.svg";
import {Link} from "react-router-dom";

const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  & div:not(:last-child) {
    margin-inline-end: 5px;
  }

  & .navigation-arrow {
    transform: rotate(-90deg);
  }

  &:hover {
    .navigation-arrow{
      transform: rotate(90deg);
      transition: transform 367ms cubic-bezier(.21,0,.07,1);
    }
  }
`
const items = [
    {
        key: '1',
        label: (
            <Link to={'/profile/management'}>프로필 관리</Link>
        ),
        // icon: <SmileOutlined />,
        disabled: false,
    },
    {
        key: '2',
        label: (
            <Link to={'/profile/transfer'}>프로필 이전</Link>
        ),
        // icon: <SmileOutlined />,
        disabled: false,
    },
    {
        key: '3',
        label: (
            <Link to={'/account'}>계정</Link>
        ),
        // icon: <SmileOutlined />,
        disabled: false,
    },
    {
        key: '4',
        label: (
            <Link to={'/cs'}>고객 센터</Link>
        ),
        // icon: <SmileOutlined />,
        disabled: false,
    },
    {
        key: '5',
        label: (
            <Link to={'/logout'}>로그아웃</Link>
        ),
        // icon: <SmileOutlined />,
        disabled: false,
    },
]
export const HeaderProfileDropDown = () => {
    const currentUser = useSelector(state => state.userSlice.currentUser)
    const {name, src} = currentUser
    const clickHandler = (event) => {
        event.preventDefault()
    }

    return (
        <Dropdown menu={{items}} arrow>
            <button onClick={clickHandler}>
                <Wrapper>
                    <ImageWrapper width={'1.5vw'} height={'1.5vw'}>
                        <img src={src} alt={name}/>
                    </ImageWrapper>
                    <ImageWrapper width={'0.7vw'} height={'0.7vw'}>
                        <LeftArrowIcon fill={'white'} width={'0.7vw'} height={'0.7vw'} className={'navigation-arrow'}/>
                    </ImageWrapper>
                </Wrapper>
            </button>
        </Dropdown>
    )
}