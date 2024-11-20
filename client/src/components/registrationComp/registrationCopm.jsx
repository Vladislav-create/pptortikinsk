import {BrowserRouter, Routes, Route, Link, useLocation, useParams} from "react-router-dom"
import styles from "./registration.module.css"
import {HeaderComponent} from '../headerComp/headerComponent'

export function RegistrationComp (){
    return (
        <div className={styles.test}>
            <h1>РЕГИСТРАЦИЯ</h1>
        </div>
    )
}