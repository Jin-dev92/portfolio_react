import { Player, Controls } from "@lottiefiles/react-lottie-player";

const LoadingIndicator = () => {
  const spinnerURL =
    "https://assets10.lottiefiles.com/private_files/lf30_DGRf6G.json";
  return (
    <Player
      autoplay
      loop
      src={spinnerURL}
      style={{ height: "300px", width: "300px" }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
};

export default LoadingIndicator;
