import React, { useState, useEffect } from "react";
import styles from "../styles/image_slider.module.css";
import Image from "next/image";

import backButton from "../public/icons/right_arrow.svg";
import nextButton from "../public/icons/next_arrow.svg";

const Slider = ({
  imageList,
  width,
  height,
  loop = true,
  autoPlay = true,
  autoPlayInterval = 3000,
  showArrowControls = true,
  showDotControls = true,
  bgColor = "none",
}) => {
  let [active, setActive] = useState(0);

  const setPreviousImage = () => {
    if (active !== 0) {
      setActive((active -= 1));
    } else {
      if (loop) {
        setActive((active = imageList.length - 1));
      }
    }
  };

  const setNextImage = () => {
    if (active !== imageList.length - 1) {
      setActive((active += 1));
    } else {
      if (loop) {
        setActive((active = 0));
      }
    }
  };

  const leftClickHandle = () => {
    setPreviousImage();
  };

  const rightClickHandle = () => {
    setNextImage();
  };

  const dotClickHandler = (e) => {
    const dotNum = e.target.getAttribute("data-key");
    setActive((active = parseInt(dotNum)));
  };

  useEffect(() => {
    if (autoPlay) {
      let autoSlider = setInterval(setNextImage, autoPlayInterval);
      return () => clearInterval(autoSlider);
    }
  }, [active]);

  return (
    <div>
      <div className={styles.wrapper} style={{ backgroundColor: bgColor }}>
        {((showArrowControls && !loop && active !== 0) ||
          (showArrowControls && loop)) && (
          <div className={styles.leftClick} onClick={leftClickHandle}>
            <Image className={styles.button} src={backButton} alt="back" />
          </div>
        )}
        {active === 0 && (
          <h4 className={styles.main1}>
            Зочлох үйлчилгээний салбарын <br /> ЦАХИМ ШИЛЖИЛТИЙГ
            <br /> удирдах ЦОГЦ СИСТЕМ
          </h4>
        )}
        {active === 1 && (
          <h4 className={styles.main1}>
            Цаасан меню шаардлагагүй
            <br /> ЗАЙНААС ЗАХИАЛЖ ЗАЙНААС ТӨЛЬЕ!
          </h4>
        )}
        {active === 2 && (
          <h4 className={styles.main1}>
            -{">"} УРЬДЧИЛСАН ЗАХИАЛГА
            <br />-{">"} ШИРЭЭ ЗАХИАЛГА
            <br />-{">"} ХҮРГЭЛТ
            <br />
            ТАНЫГ ОЧИХОД ЗАХИАЛСАН
            <br />
            ХООЛ ТАНЬ БЭЛЭН БАЙНА
          </h4>
        )}
        {active === 3 && (
          <h4 className={styles.main1}>
            Ресторан, Паб, Караоке
            <br />
            БҮХ АСУУДЛЫГ ганц ШИЙДЛЭЭР
          </h4>
        )}
        <Image className={styles.images} src={imageList[active]} alt="image" />
        {((showArrowControls && !loop && active !== imageList.length - 1) ||
          (showArrowControls && loop)) && (
          <div className={styles.rightClick} onClick={rightClickHandle}>
            <Image className={styles.button} src={nextButton} alt="next" />
          </div>
        )}
      </div>
      {showDotControls && (
        <div className={styles.dots}>
          {imageList.map((el, index) => {
            if (index !== active) {
              return (
                <div
                  key={index}
                  className={styles.dot}
                  data-key={index}
                  onClick={dotClickHandler}
                />
              );
            } else {
              return <div key={index} className={styles.activeDot}></div>;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;