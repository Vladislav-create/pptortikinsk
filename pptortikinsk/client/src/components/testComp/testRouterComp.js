import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom"
import { Contacts } from './testContactsComp';

export function Menu () {

    

    return (
        <div>
            <h1>Меню</h1>

            <nav>
                <Link to="/">Главная</Link>
                <br/>
                <Link to="/about">О Нас</Link>
                <br/>
                <Link to="/contacts">Контакты</Link>
                <br/>
                <Link to="*">404</Link>
            </nav>
        </div>
    )
}

export function TestRouterMain() {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Router V6</h1>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element = {<h1>Home page</h1>}/>
                    <Route path="/about" element = {<h1>About page</h1>}/>
                    <Route path="/contacts" element = {<Contacts />}/>
                    <Route path="*" element = {<h1>404</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}