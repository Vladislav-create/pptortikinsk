/* eslint-disable jsx-a11y/alt-text */
import styles from './mainContent.module.css'
import { useEffect, useState } from "react"

export function MainContentComp() {

    let urlImgProduct = './img/products';

    function getAllProductsFromDb () {
        fetch('/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getAllProductsFromDb()
    }, [])

    
    return (
        
        <section className={`${styles.mainContentBox} ${styles.center}`}>
            <h1 className={styles.mainContentHeader}>Популярные вкусняшки</h1>
            <p>{console.log(products)}</p>
            <section className={styles.cartsBox}>
                {products.map(item => (
                    <div className={styles.productCart}>
                        <img className={styles.productImg} key={item.productId} src={urlImgProduct + item.productImg}/> 
                         <p>{console.log(urlImgProduct + item.productImg)}</p>
                         <p>{item.productName}</p>
                         <article className={styles.productCart}>
                            <div className={styles.productCartInfo}>
                            <p>Описание товара</p>
                            </div>
                        </article>
                        <div>
                            <p>Цена 1000 руб.</p>
                            <button>Хочу это</button>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}