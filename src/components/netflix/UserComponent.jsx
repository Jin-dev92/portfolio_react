import styled from "styled-components";
import {ImageWrapper} from "../common/image/ImageWrapper";
import {ImageComponent} from "../common/image/ImageComponent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const UserComponent = ({user}) => {
    const {name, src} = user
    return (
        <Wrapper>
            <ImageWrapper>
                <ImageComponent src={src} className={'profile_image'}/>
            </ImageWrapper>
            <p className={'profile_name'}>{name}</p>
        </Wrapper>
    )
}