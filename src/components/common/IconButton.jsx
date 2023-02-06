import Draggable from "react-draggable";

const IconButton = ({draggable = true, size = 100, src, position = {x: 10, y: 0}, name}) => {
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
        height: size,
        textAlign: 'center',
        color: 'white',
    }
    return (
        <Draggable scale={1} disabled={!draggable} defaultPosition={position}>
            <div>
                <div style={imageStyle}/>
                <div style={textStyle}>{name}</div>
            </div>
        </Draggable>
    )
}

export default IconButton