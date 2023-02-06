import {Button} from "antd";

const ModalHeaderButton = ({color, clickFunction}) => {
    return (
        <Button onClick={clickFunction} color={color}></Button>
    )
}

export default ModalHeaderButton