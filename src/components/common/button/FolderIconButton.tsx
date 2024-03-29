import React from "react";
import Draggable from "react-draggable";
import About from "../../about/About";
import Game from "../../game/Game";
import { SuspenseComponent } from "../SuspenseComponent";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DataChart from "../../data-chart/DataChart";

const Wrapper = styled.div`
  width: ${(props) => props.size || "6vw"};
  height: ${(props) => props.size || "6vw"};
`;
const StyledText = styled.p`
  text-align: center;
`;
const StyledImage = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: ${(props) => props.size || "6vw"};
  height: ${(props) => props.size || "6vw"};
  cursor: pointer;
`;
const FolderIconButton = ({
  draggable = true,
  src,
  position,
  name,
  id,
  setOpen,
  setContents,
}) => {
  const navigate = useNavigate();
  const isDrag = React.useRef(false);
  const onDragStart = () => {
    isDrag.current = true;
  };
  const onDragStop = () => {
    isDrag.current = false;
  };

  const getClassifiedData = (number) => {
    // 클릭한 아이콘에 맞는 데이터를 미리 세팅 해준다.
    switch (number) {
      case 1:
        return {
          title: "About me",
          component: <About />,
        };
      case 2:
        return {
          title: "Game",
          component: <Game />,
        };
      case 3:
        return {
          title: "Data API",
          component: <SuspenseComponent children={<DataChart />} />,
        };
      case 4:
        return {
          title: "Netflix",
          component: null,
        };
      default:
        return null;
    }
  };

  const onClickHandler = (event) => {
    const mouseEvent = event.detail;
    switch (mouseEvent) {
      case 1:
        setContents(getClassifiedData(id));
        break;
      case 2:
        if (id === 4) {
          navigate("/netflix");
        } else {
          setOpen(true);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Draggable
      scale={1}
      disabled={!draggable}
      defaultPosition={position}
      onStart={onDragStart}
      onStop={onDragStop}
      onMouseDown={onClickHandler}
    >
      <Wrapper>
        <StyledImage src={src} />
        <StyledText>{name}</StyledText>
      </Wrapper>
    </Draggable>
  );
};

export default FolderIconButton;
