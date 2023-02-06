import ModalHeaderButton from "./button/ModalHeaderButton";
import RowContainer from "../../layout/RowContainer";

const ModalHeader = ({title}) => {
    const handleRedClick = () => {

    }
    const handleYellowClick = () => {

    }
    const handleGreenClick = () => {

    }

    return (
        <RowContainer>
            <ModalHeaderButton color={''} clickFunction={handleRedClick}/>
            <ModalHeaderButton color={''} clickFunction={handleYellowClick}/>
            <ModalHeaderButton color={''} clickFunction={handleGreenClick}/>
        </RowContainer>
    )
}

export default ModalHeader