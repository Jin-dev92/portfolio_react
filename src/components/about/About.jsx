import React from 'react';
import {Anchor, Divider} from "antd";
import Notification from "../common/notification/Notification";
import {GithubOutlined} from "@ant-design/icons";

const About = () => {
    const indexFontStyle = {
        fontWeight: 'bold',
        fontSize: 20
    }
    const innerTextStyle = {
        fontSize: 14
    }

    const [isOpen, setIsOpen] = React.useState(false)
    const currentAnchor = React.useRef(null)

    const anchorClickHandler = (event, link) => {
        event.preventDefault()
        currentAnchor.current = link
        setIsOpen(true)
    }
    return (
        <div style={innerTextStyle}>
            <Divider orientation={"left"} orientationMargin style={indexFontStyle}>간단 소개</Divider>
            <p>3년차 주니어 풀스택 개발자 김의진 입니다.</p>
            <p>새로 배우는 것에 대한 이해도가 높으며 코드 리뷰를 즐겨 합니다.</p>
            <p>코드의 가독성을 중요시 합니다.</p>
            <p>협업을 잘 하며, 개발자가 아닌 분들과의 소통을 잘합니다.</p>
            <p>또한 배우는 것을 즐기며, 개인의 성장에 노력을 많이 합니다.</p>
            <Divider orientation={"left"} orientationMargin style={indexFontStyle}>경험</Divider>
            <Divider orientation={"left"} orientationMargin style={indexFontStyle}>프론트 엔드</Divider>
            <ul>
                <li>Javascript, ES6+ 표준 스펙을 활용한 UI 개발 경험</li>
                <li>REST API를 활용한 WEB 개발 경험</li>
                <li>HTML5, CSS3 기본 지식 및 마크업 능력, 반응형 웹 개발</li>
                <li>자바스크립트 브릿지를 사용한 하이브리드 React 앱 제작 경험 (STB, AOS, IOS)</li>
                <li>Google Analytics 의 데이터를 이용한 데이터 시각화 경험</li>
                <li>React 상태 관리 라이브러리 에 관한 이해 및 경험</li>
                <li>atomic design 에 대한 이해</li>
            </ul>
            <Divider orientation={"left"} orientationMargin style={indexFontStyle}>백엔드</Divider>
            <ul>
                <li>Spring Boot 프레임 워크를 사용한 REST API 개발과 J2EE 패턴을 사용한 프로젝트 설계 , 팀 프로젝트 경험 (JAVA)</li>
                <li>django 프레임 워크를 사용한 REST API 개발 (python) 및 프로젝트 설계</li>
                <li>ORM 에 대한 사용 경험</li>
                <li>swagger 이용한 문서화 경험</li>
                <li>SQL 이용한 데이터 추출 및 분석</li>
            </ul>
            <Divider orientation={"left"} orientationMargin style={indexFontStyle}>기타</Divider>
            <ul>
                <li>Localization 에 대한 경험</li>
                <li>기획, 디자인 팀과 협업을 통한 서비스 개발 경험</li>
                <li>Github action 이용한 CI/CD 경험</li>
                <li>AWS CloudFront, AWS s3를 사용한 웹 배포 경험</li>
                <li>Jira, Zeplin, Slack 협업 툴 사용 경험</li>
            </ul>
            <Divider orientation={"left"} orientationMargin style={indexFontStyle}>링크</Divider>
            <Anchor
                onClick={anchorClickHandler}
                items={[
                    {
                        key: 'github',
                        href: 'https://github.com/Jin-dev92',
                        title: '깃 허브',
                    },
                    {
                        key: 'port',
                        href: 'https://daffy-bacon-3c6.notion.site/0c59987b2f604387a62328484bb2864b?v=58a9a33d63764677aca16b15d3f70954',
                        title: '경력 기술서',
                    },
                ]}
            />
            <Notification isOpen={isOpen} setIsOpen={setIsOpen} href={currentAnchor.current?.href}/>
        </div>
    )
}

export default About