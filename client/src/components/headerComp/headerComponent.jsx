/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./header.module.css";
import svgMap from "../../pictures/pictures-header/map.svg";
import svgPhone from "../../pictures/pictures-header/phone.svg";
import svgInsta from "../../pictures/pictures-header/insta.svg";
import svgVK from "../../pictures/pictures-header/vk.svg";
import svgTelegram from "../../pictures/pictures-header/telegramm.svg";
import svgMenu from "../../pictures/pictures-header/Menu.svg";
import svgCatch from "../../pictures/pictures-header/Catch.svg";
import {Routes, Route, Link, useLocation, useParams, Outlet} from "react-router-dom"

const React = require("react");

export function HeaderComponent() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className={`${styles.header__top__contentBox} ${styles.center}`}>
          <p className={styles.header__top__contentText}>
            ИНГРИДИЕНТЫ БЕЗ САХАРА
          </p>
        </div>

      </div>
      <div className={`${styles.header__middle} ${styles.center}`}>
          
          <div className={styles.header__middle__menu}>
            <img src={ svgMenu }></img>
          </div>
          
          <div className={styles.header__middle__lableCityBox}>
            <div className={styles.header__middle__lableCity}>
              <img src={svgMap} />
              <p className={styles.header__middle__lableCityText}>
                Новосибирск
              </p>
            </div>
            <div className={styles.header__middle__lableCity}>
              <img src={svgPhone} />
              <p className={styles.header__middle__lableCityText}>
                8 953 882 60 80
              </p>
            </div>
          </div>

          <div className={styles.header__middle__lableBox}>
            <h1 className={styles.header__middle__lableText}>ПЕРЕДЕЛАТЬ</h1>
          </div>

          <div className={styles.header__middle__catch}>
            <img src={ svgCatch }></img>
          </div>

          <div className={styles.header__middle__lableSocial__box}>
            <div className={styles.header__middle__lableSocial}>
              <img className={styles.headerSocialIcon} src={svgInsta} />
              <img className={styles.headerSocialIcon} src={svgVK} />
              <img className={styles.headerSocialIcon} src={svgTelegram} />
            </div>
            <div className={styles.header__middle__registration__box}>
              <Link to="/login" className={styles.header__middle__registration__login}     href="">Вход
              </Link>
              <Link to="/registration" className={styles.header__middle__registration} href="">Регистрация
              </Link>
            </div>
          </div>
        
      </div>
      <nav className={`${styles.header__nav} ${styles.center}`}>
        <details 
            open={isOpen} 
            className={styles.header__nav__listOfCake} 
            onMouseOver={() => {setIsOpen(true)}}
            onMouseLeave={() => {setIsOpen(false)}}
            >
            <summary className={styles.header__nav__title}>Торты</summary>
            <p className={styles.header__nav__subtitle}>Бисквитные торты</p>
            <p className={styles.header__nav__subtitle}>Муссовые торты</p>
            <p className={styles.header__nav__subtitle}>Бисквитные торты Бенто</p>
            <p className={styles.header__nav__subtitle}>Бисквитные торты Макс</p>
        </details>
        <div className={styles.header__nav__titleBox}>
          <a href="#" className={styles.header__nav__title}>Кейк-попс <svg className={styles.header__nav__svg} viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg></a>
          <a href="#" className={styles.header__nav__title}>Чизлейки <svg className={styles.header__nav__svg} viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg></a>
          <a href="#" className={styles.header__nav__title}>Муссовые <svg className={styles.header__nav__svg} viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg></a>
          <a href="#" className={styles.header__nav__title}>Блинные ПП <svg className={styles.header__nav__svg} viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg></a>
          <a href="#" className={styles.header__nav__title}>Капкейки <svg className={styles.header__nav__svg} viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg></a>
          <a href="#" className={styles.header__nav__title}>Хлебушек <svg className={styles.header__nav__svg} viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg></a>
          <a class="dribbble" href="https://dribbble.com/ai" target="_blank"><img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt=""></img>
          </a>

        </div>
      </nav>
    </header>
  );
}
