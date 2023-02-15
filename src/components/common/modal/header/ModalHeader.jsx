import ModalHeaderButton from "./button/ModalHeaderButton";
import RowContainer from "../../layout/RowContainer";

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
        <RowContainer>
            <div>
                <ModalHeaderButton color={'#fc635c'} clickFunction={handleRedClick}/>
            </div>
            <div style={buttonWrapperStyle}>
                <ModalHeaderButton color={'#fbba22'} clickFunction={handleYellowClick}/>
            </div>
            <div style={buttonWrapperStyle}>
                <ModalHeaderButton color={'#2ace38'} clickFunction={handleGreenClick}/>
            </div>
        </RowContainer>
    )
}

export default ModalHeader