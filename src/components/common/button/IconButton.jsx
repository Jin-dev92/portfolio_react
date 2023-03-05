import React from 'react';
import Draggable from "react-draggable";
import About from "../../about/About";
import Game from "../../game/Game";
import DataChart from "../../dataChart/DataChart";
import Chrome from "../../chrome/Chrome";


const IconButton = ({draggable = true, size = 120, src, position, name, id, setOpen, setContents}) => {
    const isDrag = React.useRef(false)
    const onDragStart = () => {
        isDrag.current = true
    }
    const onDragStop = () => {
        isDrag.current = false
    }
    const getClassifiedData = (number) => { // 클릭한 아이콘에 맞는 데이터를 미리 세팅 해준다.
        switch (number) {
            case 1:
                return {
                    title: "About me",
                    component: <About/>,
                }
            case 2:
                return {
                    title: "Game",
                    component: <Game/>,
                }
            case 3:
                return {
                    title: "Data API",
                    component: <DataChart/>,
                }
            case 4:
                return {
                    title: "Chrome",
                    component: <Chrome/>,
                }
            default:
                return null
        }
    }

    const onClickHandler = (event) => {
        const mouseEvent = event.detail
        switch (mouseEvent) {
            case 1:
                setContents(getClassifiedData(id))
                break
            case 2:
                setOpen(true)
                break
            default:
                break
        }
    }

    const imageStyle = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
        width: size,
        height: size,
    }
    const textStyle = {
        width: size,
        textAlign: 'center',
        color: 'white',
        marginBlockStart: '8px'
    }
    const wrapperStyle = {
        width: size,
        height: size,
    }

    return (
        <div style={wrapperStyle}>
            <Draggable scale={1} disabled={!draggable} defaultPosition={position} onStart={onDragStart}
                       onStop={onDragStop} onMouseDown={onClickHandler}>
                <div>
                    <div style={imageStyle}/>
                    <div style={textStyle}>{name}</div>
                </div>
            </Draggable>
        </div>
    )
}

export default IconButton