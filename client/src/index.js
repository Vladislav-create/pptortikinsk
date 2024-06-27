import styles from "./components/global.module.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { TestComp } from "./components/testComp/testComponent";
// import { TestSetComp } from "./components/testComp/testSetComp";
// import { TestRouterMain } from "./components/testComp/testRouterComp";
// import { UserData } from "./components/testComp/testInputComp";
// import { useState } from "react";
import { store } from "./store";
// import { ProfilePage } from "./components/testComp/testProfileComp";
import { HeaderComponent } from "./components/headerComp/headerComponent"
import { MainImageLableComp } from "./components/mainImageLable/mainImageLableComp"
import {CostCalculationComponent} from "./components/costCalculationComp/costCalculationComponent"

// const Info = () => {
//   const [count, setcount] = useState(0);

//   function decrement() {
//     setcount(count + 1);
//   }

//   function increment() {
//     setcount(count - 1);
//   }

//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   return (
//     <div>
//       <h1>INFO-Component</h1>
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={decrement}>decrement</button>
//         <button onClick={increment}>increment</button>
//       </div>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div>
      <HeaderComponent />
      <MainImageLableComp />
      <CostCalculationComponent />
      {/* <Info />
      <TestComp
        props1={1}
        props2={"Vlad"}
        props3={true}
        props4={() => {
          console.log("Test props");
        }}
        props5={[1, 2, 3]}
        films={[
          { title: "film 2", year: 2010 },
          { title: "film 1", year: 2015 },
        ]}
      />
      <TestSetComp />
      <UserData />
      <TestRouterMain />
      <ProfilePage /> */}
    </div>
  </Provider>
);
