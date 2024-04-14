import styles from "./header.module.css"
import user_icon from "../../pictures/pictures-header/user-icon.png"
import telephone from "../../pictures/pictures-header/telephone.png"
import search from "../../pictures/pictures-header/search.png"
import shopping_bag from "../../pictures/pictures-header/shopping_bag.png"
import heart from "../../pictures/pictures-header/heart.png"

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
                    <a className = {styles.header__top__right__privateOffice} href="#">Личный кабинет<img src={user_icon} alt="Иконка личного кабинета"></img></a>
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
                        <p className = {styles.header__middle__centr__contacts__phone}><img src = {telephone}></img>+7 953-882-60-80</p>
                    </section>
                </section>



                <section className = {styles.header__middle__right}>
                    <a href = "#"><img src = {search}></img></a>
                    <a href = "#"><img src = {shopping_bag}></img></a>
                    <a href = "#"><img src = {heart}></img></a>
                </section>
            </div>
            <div className = {styles.header__bottom}>

            </div>
        </div>
    )
}