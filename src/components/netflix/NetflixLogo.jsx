import {ImageWrapper} from "../common/image/ImageWrapper";
import {ImageComponent} from "../common/image/ImageComponent";

const imageSrc = ""
export const NetflixLogo = () => {
    return (
        <ImageWrapper>
            <ImageComponent src={imageSrc} className={'logo'}/>
        </ImageWrapper>
    )
}