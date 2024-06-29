/* eslint-disable jsx-a11y/alt-text */
import styles from './mainContent.module.css'

export function MainContentComp() {
    return (
        <section className={`${styles.mainContentBox} ${styles.center}`}>
            <h1 className={styles.mainContentHeader}>Популярные вкусняшки</h1>
            <section className={styles.cartsBox}>

            </section>
        </section>
    )
}