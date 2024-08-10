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
            <h1 className={styles.header__middle__lableText}>pp_tortiki_nsk</h1>
          </div>

          <div className={styles.header__middle__catch}>
            <img src={ svgCatch }></img>
          </div>

          <div className={styles.header__middle__lableSocial}>
            <img className={styles.headerSocialIcon} src={svgInsta} />
            <img className={styles.headerSocialIcon} src={svgVK} />
            <img className={styles.headerSocialIcon} src={svgTelegram} />
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
        <p className={styles.header__nav__title}>Кейк-попс</p>
        <p className={styles.header__nav__title}>Чизлейки</p>
        <p className={styles.header__nav__title}>Муссовые пирожные</p>
        <p className={styles.header__nav__title}>Блинные ПП</p>
        <p className={styles.header__nav__title}>Капкейки</p>
        <p className={styles.header__nav__title}>Хлебушек</p>
        </div>
      </nav>
    </header>
  );
}
