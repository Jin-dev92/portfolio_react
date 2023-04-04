import styled from "styled-components";
import {List} from "../common/list/List";
import {IconButton} from "../common/button/IconButton";
import {ReactComponent as GitHubIcon} from "../../assets/svg/icons/github.svg";
import {ReactComponent as YoutubeIcon} from "../../assets/svg/icons/youtube.svg";
import {ReactComponent as FaceBookIcon} from "../../assets/svg/icons/facebook.svg";
import {ReactComponent as InstagramIcon} from "../../assets/svg/icons/instagram.svg";

import React from "react";
import {Link} from "react-router-dom";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & > ul {
    display: flex;
    margin: 10px 0;

    //@media (max-width: 480px) {
    //  flex-direction: column;
    //}
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
  font-size: 0.8vw;
  text-align: center;

  & div {
    width: 10vw;
    @media (max-width: 768px) {
      width: 40vw;
    }
    min-width: 80px;
  }
`
const iconList = [
    {
        src: '/svg/icons/github.svg',
        component: <GitHubIcon fill={'white'} width={32} height={32}/>,
        func: () => {

        },
        to: 'https://github.com/Jin-dev92',
    },
    {
        src: '/svg/icons/youtube.svg',
        component: <YoutubeIcon fill={'white'} width={32} height={32}/>,
        func: () => {

        },
        to: null,
    },
    {
        src: '/svg/icons/facebook.svg',
        component: <FaceBookIcon fill={'white'} width={32} height={32}/>,
        func: () => {

        },
        to: null,
    },
    {
        src: '/svg/icons/instagram.svg',
        component: <InstagramIcon fill={'white'} width={32} height={32}/>,
        func: () => {

        },
        to: null,
    },
]
const infomationItems = [ // 서버에서 받아온 mock 데이터
    {
        id: 1,
        name: '화면 해설'
    },
    {
        id: 2,
        name: '고객 센터'
    },
    {
        id: 3,
        name: '기프트카드'
    },
    {
        id: 4,
        name: '미디어 센터'
    },
    {
        id: 5,
        name: '투자 정보(IR)'
    },
    {
        id: 6,
        name: '입사 정보'
    },
    {
        id: 7,
        name: '이용 약관'
    },
    {
        id: 8,
        name: '개인 정보'
    },
    {
        id: 9,
        name: '법적 고지'
    },
    {
        id: 10,
        name: '쿠키 설정'
    },
    {
        id: 11,
        name: '회사 정보'
    },
    {
        id: 12,
        name: '문의 하기'
    },
]

const NetflixFooter = () => {
    return (
        <Wrapper>
            <List itemAlign={'row'}>
                {
                    iconList.map((icon, index) => (
                        <li key={`footer-icon-${index}`}>
                            <IconButton children={icon.component} to={icon.to}/>
                        </li>
                    ))
                }
            </List>
            <InformationWrapper>
                {
                    infomationItems.map((item, index) => (
                        <div key={`footer-item-${index}`}><Link to={item.src || '#'}>{item.name}</Link></div>
                    ))
                }
            </InformationWrapper>
        </Wrapper>
    )
}

export default NetflixFooter