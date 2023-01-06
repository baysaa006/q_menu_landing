import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/lottie/hand_drag.json";

function Hand() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={75}
      width={75}
      style={{ margin: 0 }}
    />
  );
}

export default Hand;
