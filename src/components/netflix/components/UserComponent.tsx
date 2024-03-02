import styled from "styled-components";
import { ImageWrapper } from "../../common/image/ImageWrapper";
import { ImageComponent } from "../../common/image/ImageComponent";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../../redux/slices/userSlice.ts";
import { UserModel } from "../../../model/user.model.ts";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledImageComponent = styled(ImageComponent)`
  width: 10vw;
  height: 10vw;
`;
export const UserComponent = (user: UserModel) => {
  const { name, thumbnail } = user;
  const dispatch = useDispatch();
  const onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(userSliceActions.setCurrentUser({ currentUser: user }));
  };
  return (
    <Wrapper onClick={onClickHandler}>
      <ImageWrapper
        width={"10vw"}
        height={"10vw;"}
        className={"user-component"}
      >
        <StyledImageComponent
          thumbnail={thumbnail}
          className={"profile_image"}
        />
      </ImageWrapper>
      <p className={"profile_name"}>{name}</p>
    </Wrapper>
  );
};
