import {Routes, Route, Link, useLocation, useParams, Outlet} from "react-router-dom"
import { useState } from "react";
import styles from "./login.module.css"
// import {HeaderComponent} from '../headerComp/headerComponent'
import { useSelector, useDispatch } from "react-redux";
import { toggleAuthUser } from "../../store/profile";

export function LoginComp () {
    // const [userAuth, setUserAuth] = useState(false);
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch();

    // function toggle(data) {
    //     if (data){
    //         dispatch(toggleAuthUser())
    //     }
    // }

    // function checkUserAuth(userDataCl) {
    //     fetch('/login', {
    //         method: 'POST',
    //         body: JSON.stringify(userDataCl),
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
        
    //     })
    //     .then(response => response.json())
    //     .then(data => data.userAuth ? dispatch(toggleAuthUser()) : console.log('Неверный логин или пароль'))
    //     console.log(profile);
    // }

    return (
        <div className={styles.test}>
            
            <h1>ВХОД</h1>
            <h2>{`${profile.isAuth}`}</h2>
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
                <button  onClick={() => (dispatch(toggleAuthUser(
                    {
                        login: login,
                        password: password,
                    }
                )))}>
                    <Link to="/profile">
                        Войти
                    </Link>
                </button>
                <Link to="/">
                    На главную
                </Link>
        </div>
        
    )
}