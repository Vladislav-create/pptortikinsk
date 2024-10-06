import { HeaderComponent } from "../headerComp/headerComponent"
import { MainContentComp } from "../mainContent/mainContentComp"
import {FooterComponent} from '../footerComp/footerComponent'

export function MainPageComp() {
    return (
        <section>
            <HeaderComponent/>
            <MainContentComp/>
            <FooterComponent/>
        </section>
    )
}