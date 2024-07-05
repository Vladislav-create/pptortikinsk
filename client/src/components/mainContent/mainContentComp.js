/* eslint-disable jsx-a11y/alt-text */
import styles from './mainContent.module.css'
// import testImg from '../../pictures/products/MousseCake/Coffee'

export function MainContentComp() {
    // let test = '../../pictures/products/MousseCake/Coffee'
    const protucts = [
        {productId: 1, productType: '', productName: '', productPrice: 2500, productCalories: '', productImg: ''},
        {productId: 1, productType: '', productName: '', productPrice: 2500, productCalories: '', productImg: ''},
        {productId: 1, productType: '', productName: '', productPrice: 2500, productCalories: '', productImg: ''}]
    return (
        <section className={`${styles.mainContentBox} ${styles.center}`}>
            <h1 className={styles.mainContentHeader}>Популярные вкусняшки</h1>
            <section className={styles.cartsBox}>
                <article className={styles.productCart}>
                    <img className={styles.productImg} src={process.env.IMG_URL + '/coffeeMousse1.png'}/>
                    <div className={styles.productCartInfo}>

                    </div>
                </article>

            </section>
        </section>
    )
}