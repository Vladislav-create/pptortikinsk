import styles from "./header.module.css"
import user_icon from "../../pictures/pictures-header/user-icon.png"
import telephone from "../../pictures/pictures-header/telephone.png"
import search from "../../pictures/pictures-header/search.png"
import shopping_bag from "../../pictures/pictures-header/shopping_bag.png"
import heart from "../../pictures/pictures-header/heart.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function HeaderComponent() {
    return (
        <div className = {styles.header}>
            <div className = {styles.header__top}>
                <div className = {styles.header__top__left}>
                    <span><a className = {styles.header__top__left__nav} href="#">Контакты</a></span>
                    <span><a className = {styles.header__top__left__nav} href="#">О нас</a></span>
                    <span><a className = {styles.header__top__left__nav} href="#">Доставка</a></span>
                    {/* <a href="#">Политика безопасности</a>
                    <a href="#">Условия соглашения</a> */}
                </div>
                <div className = {styles.header__top__right}>
                    <a className = {styles.header__top__right__privateOffice} href="#">Личный кабинет</a>
                    <svg className = {styles.header__top__right__privateOffice__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                </div>
            </div>
            <div className = {styles.header__middle}>
                <section className = {styles.header__middle__left}>
                    <a href = "#"><h1 className = {styles.header__middle__left_lable}>ПП ТОРТИКИ НСК</h1></a>
                </section>


                <section className = {styles.header__middle__centr}>
                    <section className = {styles.header__middle__centr__address}>
                        <p className = {styles.header__middle__centr__address__title}>Адрес магазина</p>
                        <p className = {styles.header__middle__centr__address__subtitle}>г. Новосибирск</p>
                    </section>
                    <section className = {styles.header__middle__centr__contacts}>
                        <p className = {styles.header__middle__centr__contacts__title}>Главный офис</p>
                        <div className = {styles.header__middle__centr__contacts__phone__box}>
                            <svg className = {styles.header__middle__centr__contacts__phone__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            <p className = {styles.header__middle__centr__contacts__phone}>+7 953-882-60-80</p>
                        </div>
                        
                    </section>
                </section>



                <section className = {styles.header__middle__right}>
                    <a href = "#"><img src = {search}></img></a>
                    <a href = "#"><img src = {shopping_bag}></img></a>
                    <a href = "#"><img src = {heart}></img></a>
                </section>
            </div>
            <div className = {styles.header__bottom}>
                    <button className = {styles.header__bottom__btn}>Торты</button>
                    <button className = {styles.header__bottom__btn}>Капкейки</button>
                    <button className = {styles.header__bottom__btn}>Чизкейки</button>
                    <button className = {styles.header__bottom__btn}>Пряники</button>
                    <button className = {styles.header__bottom__btn}>Кейк-попс</button>
            </div>
        </div>
    )
}