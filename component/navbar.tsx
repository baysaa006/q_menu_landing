import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import logo from "../public/img/logo_with_slugin.png";
import down_arrow from "../public/icons/down_arrow.svg";
import { NextPage } from "next";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image alt="logo" src={logo} width={150} />
      </div>
      <div className={styles.navs}>
        <ul className={styles.drop_down}>
          <li className={styles.drop_down_feuture}>
            <a href="" className={styles.drop_down_icon}>
              Бүтээгдэхүүн
            </a>
            <Image alt="down" src={down_arrow} />
            <ul className={styles.drop_down_items}>
              <li className={styles.item}>
                <a href="">Ухаалаг Qr цэс</a>
              </li>
              <li className={styles.item}>
                <a href="">Кассын систем</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="" className={styles.drop_down_item}>
              Үнийн санал
            </a>
          </li>
          <li>
            <a href="" className={styles.drop_down_item}>
              Холбоо барих
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button_sign_in}>Нэвтрэх</button>
        <button className={styles.button_sign_up}>Бүртгүүлэх</button>
      </div>
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
      {isNavExpanded && (
        <div className={styles.expanded_menu}>
          <ul>
            <li>
              <a href="/home">Бүтээгдэхүүн</a>
            </li>
            <li>
              <a href="/about">Үнийн санал</a>
            </li>
            <li>
              <a href="/contact">Холбоо барих</a>
            </li>
          </ul>
        </div>
      )}

      {!isNavExpanded && (
        <ul className={styles.expanded_menu_items}>
          <li>
            <a href="/home">Бүтээгдэхүүн</a>
          </li>
          <li>
            <a href="/about"> Үнийн санал</a>
          </li>
          <li>
            <a href="/contact">Холбоо барих</a>
          </li>
        </ul>
      )}
    </div>
  );
}
