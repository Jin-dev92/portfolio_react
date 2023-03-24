import styled from "styled-components";
import {ImageWrapper} from "../common/image/ImageWrapper";
import {ImageComponent} from "../common/image/ImageComponent";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "../../redux/slices/userSlice";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const UserComponent = ({user}) => {
    const {name, src} = user
    const dispatch = useDispatch()
    const onClickHandler = (event) => {
        event.preventDefault();
        dispatch(setCurrentUser({user}))
    }
    return (
        <Wrapper onClick={onClickHandler}>
            <ImageWrapper>
                <ImageComponent src={src} className={'profile_image'}/>
            </ImageWrapper>
            <p className={'profile_name'}>{name}</p>
        </Wrapper>
    )
}