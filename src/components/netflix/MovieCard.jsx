import {Card} from "antd";
import {ImageComponent} from "../common/image/ImageComponent";

const defaultSize = 300
export const MovieCard = ({data}) => {
    const {poster_path} = data
    const rootURL = [process.env.REACT_APP_MOVIE_DB_IMAGE_ROOT, `w${defaultSize}`, poster_path].join('/')
    return (
        <Card>
            <ImageComponent src={rootURL}/>
            {JSON.stringify(data)}
        </Card>
    )
}