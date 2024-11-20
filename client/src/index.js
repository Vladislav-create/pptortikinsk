import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom"
import styles from "./components/global.module.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import {MainPageComp} from './components/mainPageComp/mainPageComp'
import {ProductOverviewComp} from './components/productOverviewComp/productOverviewComp'
import { RegistrationComp } from "./components/registrationComp/registrationCopm";
import { LoginComp } from "./components/loginComp/loginComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>

          <Routes>
            <Route path="/" element = {<MainPageComp />}/>
            <Route path="/product" element = {<ProductOverviewComp />}/>
            <Route path="/registration" element = {<RegistrationComp />}/>
            <Route path="/login" element = {<LoginComp />}/>
          </Routes>

      </BrowserRouter>  
    </div>
  </Provider>
);
