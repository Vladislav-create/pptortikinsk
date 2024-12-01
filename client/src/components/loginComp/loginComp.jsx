import {Routes, Route, Link, useLocation, useParams, Outlet} from "react-router-dom"
import { useState } from "react";
import styles from "./login.module.css"
import {HeaderComponent} from '../headerComp/headerComponent'

export function LoginComp () {
    const [userAuth, setUserAuth] = useState(false);
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function checkUserAuth(userDataCl) {
        console.log('hi');
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(userDataCl),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    return (
        <div className={styles.test}>
            
            <h1>ВХОД</h1>
            <form action="#">
                <div className={styles.loginBox}>
                    <label htmlFor="">Введите логин</label>
                    <input type="text" onChange = {(e) => {setLogin(e.target.value)}} />
                    {<h1>{login}</h1>}
                </div>
                <div className={styles.passwordBox}>
                    <label htmlFor="">Введите пароль</label>
                    <input type="password" onChange = {(e) => {setPassword(e.target.value)}}/>
                    {<h1>{password}</h1>}
                </div>
            </form>
                <button  onClick={() => (checkUserAuth(
                    {
                        login: login,
                        password: password,
                    }
                ))}>
                    Войти
                </button>
                <Link to="/">
                    На главную
                </Link>
        </div>
        
    )
}