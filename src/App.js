import {Layout} from "antd";
import IconButton from "./components/common/IconButton";
function App() {
    const layoutStyle = {
        width: window.innerWidth,
        height: window.innerHeight,
        background: `url(/images/wallpaper/wallpaperbetter.com_1920x1200.jpg)`
    }
    return (
        <Layout style={layoutStyle}>
            <IconButton src={'/images/icons/computer/computer.png'}></IconButton>
        </Layout>
    );
}

export default App;
