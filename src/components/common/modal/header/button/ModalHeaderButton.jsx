import {Button} from "antd";

const ModalHeaderButton = ({color, clickFunction}) => {
    return (
        <Button onClick={clickFunction} shape={"round"} ghost style={{backgroundColor: color}} size={"small"}></Button>
    )
}

export default ModalHeaderButton