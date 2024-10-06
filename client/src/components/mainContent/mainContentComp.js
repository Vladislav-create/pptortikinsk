/* eslint-disable jsx-a11y/alt-text */
import styles from './mainContent.module.css'
import { useEffect, useState } from "react"
import svgCatch from "../../pictures/pictures-header/Catch.svg";
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom"


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

    

    function getProductInfo (product)  {
        console.log(product);
    }
    

    return (
        
        <section className={`${styles.mainContentBox} ${styles.center}`}>
            <h1 className={styles.mainContentHeader}>Популярные вкусняшки</h1>
            <p>{console.log(products)}</p>
            <section className={styles.cartsBox}>
                {products.map(item => (
                    <Link to = '/product'>
                        <div className={styles.productCart}  onClick={()=>          {getProductInfo(item);}}>
                        <img className={styles.productImg} key={item.productId} src={urlImgProduct + item.productImg}/> 
                            <div>
                                <p className={styles.productName}>{item.productName}</p>
                            </div>
                        
                            <article className={styles.test}>
                                <div className={styles.productCartInfo}>
                                <p className={styles.productCartInfoCalories}>{item.productCalories}</p>
                                <hr className={styles.productCartSeparate}></hr>
                                </div>
                            </article>

                            <div className={styles.productCartPriceBy}>
                                <p className={styles.productCartPrice}>{item.productPrice}</p>
                                <button className={styles.productCartBy}><img src={ svgCatch } className={styles.productBtnBy} ></img></button>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
            <Link to="/product">Контакты</Link>
        </section>
    )
}