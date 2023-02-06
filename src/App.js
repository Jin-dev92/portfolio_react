import {Layout} from "antd";
import IconButton from "./components/common/IconButton";
import appData from './mock/app_data.json'

function App() {
    const layoutStyle = {
        width: window.innerWidth,
        height: window.innerHeight,
        background: `url(/images/wallpaper/wallpaperbetter.com_1920x1200.jpg)`
    }


    // console.table(appData)
    return (
        <Layout style={layoutStyle}>
            {
                appData.app_list.map((data, idx) => {
                    return (
                        <IconButton src={data.src} position={data.position} key={`icon-button-${idx}`}/>
                    )
                })
            }
        </Layout>
    );
}

export default App;
