import ModalHeaderButton from "./button/ModalHeaderButton";
import {Container} from "../../layout/Container";
import {List} from "../../list/List";
import {ListItem} from "../../list/ListItem";

const ModalHeader = ({title, setOpen}) => {
    const handleRedClick = () => {
        setOpen(false)
    }
    const handleYellowClick = () => {

    }
    const handleGreenClick = () => {

    }
    return (
        <Container direction={'row'}>
            <List itemAlign={'row'} marginEnd={'10px'}>
                <ListItem>
                    <ModalHeaderButton color={'#fc635c'} clickFunction={handleRedClick}/>
                </ListItem>
                <ListItem>
                    <ModalHeaderButton color={'#fbba22'} clickFunction={handleYellowClick}/>
                </ListItem>
                <ListItem>
                    <ModalHeaderButton color={'#2ace38'} clickFunction={handleGreenClick}/>
                </ListItem>
            </List>
        </Container>
    )
}

export default ModalHeader