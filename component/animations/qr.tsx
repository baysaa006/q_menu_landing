import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/lottie/qr.json";

function Qr() {
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
      height={45}
      width={55}
      style={{ margin: 0 }}
    />
  );
}

export default Qr;
