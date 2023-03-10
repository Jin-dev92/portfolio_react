import {Layout} from "antd";
import IconButton from "./components/common/button/IconButton";
import appData from './mock/app_data.json'
import CommonModal from "./components/common/modal/CommonModal";
import React from "react";


function App() {
    const [open, setOpen] = React.useState(false)
    const contents = React.useRef(<></>)
    const setContents = (value) => {
        contents.current = value
    }
    // console.log(process.env)
    const layoutStyle = {
        width: 1920,
        height: 1080,
        background: `url(${appData?.app_bg})`,
    }

    return (
            <Layout style={layoutStyle}>
                {
                    appData.app_list.map((data, idx) => {
                        return !data.disabled ? (
                            <IconButton src={data.src}
                                        position={data.position}
                                        key={`icon-button-${idx}`}
                                        name={data.name}
                                        id={data.id}
                                        setOpen={setOpen}
                                        setContents={setContents}
                            />
                        ) : null
                    })
                }
                <CommonModal open={open} setOpen={setOpen} contents={contents}/>
            </Layout>
    );
}

export default App;
