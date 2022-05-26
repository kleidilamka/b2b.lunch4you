import React from "react";
import ReactDOM from "react-dom";
import styles from "./Main.module.scss";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import ProductDetails from "./pages/ProductDetails";
// import Test from "./pages/Test";

function Main() {
    return (
        <div>
            <ProductDetails />
        </div>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
