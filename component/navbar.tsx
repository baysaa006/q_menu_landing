import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import logo from "../public/img/logo_with_slugin.png";
import down_arrow from "../public/icons/down_arrow.svg";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="/">
          {" "}
          <Image alt="logo" src={logo} width={150} />
        </a>
      </div>
      <div className={styles.navs}>
        <ul className={styles.drop_down}>
          <li className={styles.drop_down_feuture}>
            <a href="/#feature_1">
              <h4>Бүтээгдэхүүн</h4>
            </a>
            <Image alt="down" src={down_arrow} />
            <ul className={styles.drop_down_items}>
              <li className={styles.item}>
                <a href="/#feature_1">
                  <h4>Ухаалаг Qr цэс</h4>
                </a>
              </li>
              <li className={styles.item}>
                <a href="/#feature_2">
                  <h4>Кассын систем</h4>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/#pricing" className={styles.drop_down_item}>
              <h4> Үнийн санал</h4>
            </a>
          </li>
          <li>
            <a href="/#contact" className={styles.drop_down_item}>
              <h4>Холбоо барих</h4>
            </a>
          </li>
          <li>
            <a href="/" className={styles.glow_on_hover}>
              <h4 className={styles.animate_character}>Ресторанууд</h4>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button_sign_in}>
          <h4>Нэвтрэх</h4>
        </button>
        <button className={styles.button_sign_up}>
          <h4>Бүртгүүлэх</h4>
        </button>
      </div>
      {!isNavExpanded && (
        <svg
          className={styles.menu}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          width={25}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      )}
      {isNavExpanded && (
        <svg
          className={styles.menu}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          width={25}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
      )}

      {isNavExpanded && (
        <ul className={styles.expanded_menu_items}>
          <li>
            <a
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
              href="/#feature_1"
            >
              <h4>Бүтээгдэхүүн</h4>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
              href="/#pricing"
            >
              {" "}
              <h4>Үнийн санал</h4>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
              href="/#contact"
            >
              {" "}
              <h4>Холбоо барих</h4>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
