import { HeaderComponent } from "../headerComp/headerComponent"
import { MainContentComp } from "../mainContent/mainContentComp"
import {FooterComponent} from '../footerComp/footerComponent'
import { ProductOverviewComp } from "../productOverviewComp/productOverviewComp"
import { LoginComp } from "../loginComp/loginComp"
import { ProfileComp } from "../profile/profileComp";
import { PrivateRoute } from "../privateRoute/privateRouteComp";
import { CostCalculationComponent } from "../costCalculationComp/costCalculationComponent";
import {BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet} from "react-router-dom";
import { Provider } from "react-redux"
import { store } from "../../store/create-store"


export function MainPageComp() {
    return (
        <section>
            <Provider store = {store}>
                <HeaderComponent/>
                    <Routes>
                        <Route path="/" element = {<MainContentComp/>}/>
                        <Route path="/product" element = {<ProductOverviewComp/>}/>
                        <Route path="/login" element = {<LoginComp/>}/>
                        <Route path="/profile" element = {<ProfileComp/>}/>
                        <Route path="*" element = {<h1>404</h1>}/>
                    </Routes>
                    <CostCalculationComponent/>
                <FooterComponent/>
            </Provider>
        </section>
    )
}