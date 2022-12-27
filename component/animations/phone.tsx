import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/lottie/phone.json";

function Phone() {
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
      height={30}
      width={30}
      style={{ margin: 10 }}
    />
  );
}

export default Phone;
