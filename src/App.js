// import {Layout} from "antd";
import FolderIconButton from "./components/common/button/FolderIconButton";
import appData from "./mock/app_data.json";
import CommonModal from "./components/common/modal/CommonModal";
import React from "react";
import { FlexContainer } from "./components/common/layout/FlexContainer";
import styled from "styled-components";

const MainContainer = styled(FlexContainer)`
  background: url(${appData?.app_bg});
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [open, setOpen] = React.useState(false);
  const contents = React.useRef(<></>);
  const setContents = (value) => {
    contents.current = value;
  };
  // console.log(GLOBAL_CONFIG.)
  return (
    <MainContainer>
      {appData.app_list.map((data, idx) => {
        return !data.disabled ? (
          <FolderIconButton
            src={data.src}
            position={{ x: 25, y: 25 + 50 * idx }}
            key={`icon-button-${idx}`}
            name={data.name}
            id={data.id}
            setOpen={setOpen}
            setContents={setContents}
          />
        ) : null;
      })}
      <CommonModal open={open} setOpen={setOpen} contents={contents} />
    </MainContainer>
  );
}

export default App;
