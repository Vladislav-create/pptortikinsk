import styles from "./header.module.css"
// import user_icon from "../../pictures/pictures-header/user-icon.png"
// import telephone from "../../pictures/pictures-header/telephone.png"
// import search from "../../pictures/pictures-header/search.png"
// import shopping_bag from "../../pictures/pictures-header/shopping_bag.png"
// import heart from "../../pictures/pictures-header/heart.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <a className = {styles.header__top__right}>
                    <a className = {styles.header__top__right__privateOffice} href="#">Личный кабинет</a>
                    <svg className = {styles.header__top__right__privateOffice__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                </a>
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
                    <a href = "#"><svg className = {styles.header__middle__right__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></a>
                    <a href = "#"><svg className = {styles.header__middle__right__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></a>
                    <a href = "#"><svg className = {styles.header__middle__right__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></a>
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