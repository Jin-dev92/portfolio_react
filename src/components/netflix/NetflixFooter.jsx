import styled from "styled-components";
import {List} from "../common/list/List";
import {IconButton} from "../common/button/IconButton";
import {ReactComponent as GitHubIcon} from "../../assets/svg/icons/github.svg";
import {ReactComponent as YoutubeIcon} from "../../assets/svg/icons/youtube.svg";
import {ReactComponent as FaceBookIcon} from "../../assets/svg/icons/facebook.svg";
import {ReactComponent as InstagramIcon} from "../../assets/svg/icons/instagram.svg";

import React from "react";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
  & > ul {
    margin: 10px 0;
  }

  & > ul > li {
    &:not(:first-child) {
      margin-inline-start: 8px;
    }
  }
`
const InformationWrapper = styled.div`
  display: flex;
  width: 40vw;
  flex-wrap: wrap;

  & div {
    width: 10vw;
  }
`
const iconList = [
    {
        src: '/svg/icons/github.svg',
        component: <GitHubIcon fill={'white'} width={32} height={32}/>,
        func: () => {

        }
    },
    {
        src: '/svg/icons/youtube.svg',
        component: <YoutubeIcon fill={'white'} width={32} height={32}/>,
        func: () => {

        }
    },
    {
        src: '/svg/icons/facebook.svg',
        component: <FaceBookIcon fill={'white'} width={32} height={32}/>,
        func: () => {

        }
    },
    {
        src: '/svg/icons/instagram.svg',
        component: <InstagramIcon fill={'white'} width={32} height={32}/>,
        func: () => {

        }
    },
]
const NetflixFooter = () => {
    return (
        <Wrapper>
            <List itemAlign={'row'}>
                {
                    iconList.map((icon, index) => (
                        <li key={`footer-icon-${index}`}>
                            <IconButton children={icon.component}/>
                        </li>
                    ))
                }
            </List>
            <InformationWrapper>
                <div>화면 해설</div>
                <div>고객 센터</div>
                <div>기프트카드</div>
                <div>미디어 센터</div>
                <div>투자 정보(IR)</div>
                <div>입사 정보</div>
                <div>이용 약관</div>
                <div>개인 정보</div>
                <div>법적 고지</div>
                <div>쿠키 설정</div>
                <div>회사 정보</div>
                <div>문의 하기</div>
            </InformationWrapper>
            update Date : 23.03.29
        </Wrapper>
    )
}

export default NetflixFooter