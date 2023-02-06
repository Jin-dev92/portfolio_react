import Draggable from "react-draggable";

const IconButton = ({draggable = true, size = 100, src, position = {x: 10, y: 0}}) => {
    const imageStyle = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
        width: size,
        height: size,
    }
    return (
        <Draggable scale={1} disabled={!draggable} defaultPosition={position}>
            <div style={imageStyle}></div>
        </Draggable>
    )
}

export default IconButton