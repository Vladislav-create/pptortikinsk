import svgHeart from '../../pictures/pictures-footer/heart.svg'
import svgTruck from '../../pictures/pictures-footer/truck.svg'
import svgSeedling from '../../pictures/pictures-footer/seedling.svg'
import styles from "./footer.module.css";

export function FooterComponent() {
    return (
        <footer className={styles.footerBox}>
            <div className={`${styles.footer__content} ${styles.center}`}>
                <section className={styles.footer__left}>
                    <div className={styles.footer__left__top}>
                        <div className={styles.footer__left__top__heart}>
                            <img className={styles.footer__left__img} src={svgHeart} alt="картинка сердце" />
                            <p className={styles.footer__left__top__text}>Готовим вручную и с любовью</p>
                        </div>
                        <div className={styles.footer__left__top__truck}>
                            <img className={styles.footer__left__img} src= {svgTruck} alt="картинка доставки" />
                            <p className={styles.footer__left__top__text}>Доставка по городу</p>
                        </div>
                        <div className={styles.footer__left__top__seedling}>
                            <img className={styles.footer__left__img} src= {svgSeedling} alt="картинка растения" />
                            <p className={styles.footer__left__top__text}>100% натуральные ингредиенты</p>
                        </div>



                    </div>
                    <div className={styles.footer__left__bottom}>
                        <h1>копирайт</h1>
                    </div>
                </section>
                <section className={styles.footer__middle}></section>
                <section className={styles.footer__right}></section>
            </div>
        </footer>
    )
}