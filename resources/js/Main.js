import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import styles from "./Main.module.scss";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
// import Test from "./pages/Test";

function Main() {
    return (
        <div>
            <Navbar />
            <ProductDetails />
        </div>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
