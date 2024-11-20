import {BrowserRouter, Routes, Route, Link, useLocation, useParams} from "react-router-dom"
import styles from "./login.module.css"
import {HeaderComponent} from '../headerComp/headerComponent'

export function LoginComp () {
    return (
        <div className={styles.test}>
            <h1>ВХОД</h1>
        </div>
    )
}