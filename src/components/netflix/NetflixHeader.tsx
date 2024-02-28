import NetflixMainNavigation from "./components/header/NetflixMainNavigation";
import React from "react";
import styled from "styled-components";

const Header = styled.header``;
const NetflixHeader = () => {
  return (
    <Header>
      <NetflixMainNavigation />
    </Header>
  );
};
export default NetflixHeader;
