import ModalHeaderButton from "./button/ModalHeaderButton";
import {FlexContainer} from "../../layout/FlexContainer";
import {List} from "../../list/List";
import {ListItem} from "../../list/ListItem";
import styled from "styled-components";

const Wrapper = styled(FlexContainer)`
    & > ul > li {
      margin-inline-end: 0.7vw;
    }
`
const ModalHeader = ({title, setOpen}) => {
    const handleRedClick = () => {
        setOpen(false)
    }
    const handleYellowClick = () => {

    }
    const handleGreenClick = () => {
    }

    return (
        <Wrapper direction={'row'}>
            <List itemAlign={'row'}>
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
        </Wrapper>
    )
}

export default ModalHeader