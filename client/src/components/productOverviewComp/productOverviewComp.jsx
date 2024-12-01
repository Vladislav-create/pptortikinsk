import {BrowserRouter, Routes, Route, Link, useLocation, useParams} from "react-router-dom"
import styles from './productOverview.module.css'
import {HeaderComponent} from '../headerComp/headerComponent'
import { useEffect, useState } from "react"

export function ProductOverviewComp() {
    const location = useLocation();
    const product = location.state
    let productImages = product.productImg.split(';');
    let startImg = productImages[0]

    console.log(productImages);

    
    const urlImgProduct = './img/products';

    console.log(product);

    const [currentImg, setcurrentImg] = useState([]);
    useEffect(()=>{
        setcurrentImg(startImg)
    }, [])
    console.log(currentImg);

    return (
        <section >
            <section className={`${styles.productOverviewBox} ${styles.center}`}>
            <Link to="/">На главную</Link>
                <div className={styles.productTitleBox}>
                    <h1 className={styles.productTitle}>{product.productName}</h1>
                </div>
                <div className={styles.productViewBox}>
                    <div className={styles.productViewBox__left}>
                        {productImages.map(item => (
                            <div>
                                <img 
                                    className={styles.productImgAll} 
                                    src={urlImgProduct + item} alt="фотографии товара"
                                    onClick={() => {
                                        setcurrentImg(item)
                                    }} 
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.productViewBox__right}>
                        <img 
                            className={styles.productImgBig}
                            src={urlImgProduct + currentImg} 
                            alt="крупное фото товара" 
                        />
                    </div>
                </div>
                <h3>{product.productId}</h3>
                <h3>{product.productType}</h3>
                <h3>{product.productPrice}</h3>
                <h3>{product.productCalories}</h3>
                <h3>{product.productDiscription}</h3>
                <h3>{product.productImg}</h3>
            </section>

        </section>
    )
}