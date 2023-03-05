import ModalHeaderButton from "./button/ModalHeaderButton";
import {Container} from "../../layout/Container";

const ModalHeader = ({title, setOpen}) => {
    const handleRedClick = () => {
        setOpen(false)
    }
    const handleYellowClick = () => {

    }
    const handleGreenClick = () => {

    }

    const buttonWrapperStyle = {
        marginLeft: 5
    }
    return (
        <Container>
            <div>
                <ModalHeaderButton color={'#fc635c'} clickFunction={handleRedClick}/>
            </div>
            <div style={buttonWrapperStyle}>
                <ModalHeaderButton color={'#fbba22'} clickFunction={handleYellowClick}/>
            </div>
            <div style={buttonWrapperStyle}>
                <ModalHeaderButton color={'#2ace38'} clickFunction={handleGreenClick}/>
            </div>
        </Container>
    )
}

export default ModalHeader