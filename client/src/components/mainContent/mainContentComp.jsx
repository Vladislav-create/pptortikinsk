/* eslint-disable jsx-a11y/alt-text */
import styles from './mainContent.module.css'
import { useEffect, useState } from "react"
import svgRub from '../../pictures/pictures-card/ruble.svg'
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
        // console.log(product);
    }
    
    return (
        
        <section className={`${styles.mainContentBox} ${styles.center}`}>
            <h1 className={styles.mainContentHeader}>Популярные вкусняшки</h1>
            <p>{console.log(products)}</p>
            <section className={styles.cartsBox}>
                {products.map(item => (
                    <div className={styles.cartsBoxDecor}>
                        <div className={styles.cartsBoxDecor__cover}>
                        <Link to = '/product' state={item}>
                            <div 
                                className={styles.productCart}  
                                onClick={()=>{getProductInfo(item);}}>
                                <img 
                                    className={styles.productImg} 
                                    key={item.productId} 
                                    src={urlImgProduct + item.productImg.split(';')[0]}
                                /> 
                                <div> 
                                    <p className={styles.productName}>{item.productName}</p>
                                </div>
                            
                                <article className={styles.test}>
                                    <div className={styles.productCartInfo}>
                                    <p className={styles.productCartInfoCalories}>{item.productCalories}</p>
                                    <hr className={styles.productCartSeparate}></hr>
                                    </div>
                                </article>
                            </div>
                        </Link>
                            <div className={styles.productCartBoxBy}>
                                <div className={styles.productCartPriceBy}>
                                        <p className={styles.productCartPrice}>{item.productPrice}</p>
                                        <img className={styles.productCartRub} src={svgRub} alt="" />
                                        <p>кг</p>
                                </div>
                                <button className={styles.productCartBy}><img src={ svgCatch } className={styles.productBtnBy} ></img></button>
                            </div>
                        </div>

                    </div>
                ))}
            </section>
        </section>
    )
}