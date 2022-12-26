import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/lottie/code.json";

function Code() {
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
      height={35}
      width={35}
      style={{ margin: 0 }}
    />
  );
}

export default Code;
