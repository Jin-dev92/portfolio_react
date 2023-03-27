import styled from "styled-components";
import React from 'react';
import videojs from "video.js";
import VideoJS from "../common/video/VideoJS";

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
`
const AutoPlayVideoComponents = ({videoSrc}) => {
    const playerRef = React.useRef(null);
    const videoJsOptions = {
        autoplay: true,
        controls: false,
        responsive: true,
        loop: false,
        mute: true,
        fluid: true,
        sources: [{
            src: videoSrc || '/videos/1920x1080.mp4',
            type: 'video/mp4'
        }]
    };
    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };


    return (
        <Wrapper>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>
        </Wrapper>
    )
}

export default AutoPlayVideoComponents