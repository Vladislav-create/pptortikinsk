import {BrowserRouter, Routes, Route, Link, useLocation, useParams} from "react-router-dom"
export function ProductOverviewComp() {
    const location = useLocation();
    const product = location.state
    
    console.log(product);

    return (
        <section>
            <h1>{product.productName}</h1>
            <h3>{product.productId}</h3>
            <h3>{product.productType}</h3>
            <h3>{product.productPrice}</h3>
            <h3>{product.productCalories}</h3>
            <h3>{product.productDiscription}</h3>
            <h3>{product.productImg}</h3>
            <Link to="/">На главную</Link>
        </section>
    )
}